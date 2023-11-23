using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using DataLayer.Database;
using DataLayer.Models;
using WebServer.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.OpenApi.Validations;

[Route("api/user")]
[ApiController]
public class UserController : ControllerBase
{
    private readonly IUserService _userService;
    private readonly LinkGenerator _linkGenerator;
    private readonly string _secretKey = "YourSecretKey";

    public UserController(IUserService userService, LinkGenerator linkGenerator)
    {
        _userService = userService;
        _linkGenerator = linkGenerator;
    }
    [HttpGet]
    public ActionResult<IList<User>> GetUsers()
    {
        var users = _userService.GetUsers();
        if (users == null)
            return NotFound("No user history found.");

        return Ok(users);
    }

    [HttpGet("{userid}")]
    public ActionResult<IList<User>> GetUserById(int userid)
    {
        var user = _userService.GetUserById(userid);
        if (user == null)
        {
            return NotFound($"User with ID {userid} not found");
        }
        return Ok(user);
    }

    [HttpPost("register")]
    public IActionResult Register(CreateUserModel userRequest)
    {
        // Check if a user with the provided email already exists
        var existingUser = _userService.GetUserByEmail(userRequest.email);

        if (existingUser != null)
            return BadRequest("Email is already in use");

        // Hash and salt the password (secure hashing library?)
        string passwordHash = userRequest.password; // Replace with actual password hashing logic

        // Create the user and store it in the database
        _userService.CreateUser(
            userRequest.firstName,
            userRequest.lastName,
            userRequest.email,
            passwordHash, // Use the hashed password here
            userRequest.phoneNo
        );
        User user = _userService.GetUserByEmail(userRequest.email);

        var token = GenerateJwtToken(user);
        return Ok(new { Token = token });
    }

    [HttpPost("login")]
    public IActionResult Login(UserModel loginRequest)
    {
        // Find the user by email
        var user = _userService.GetUserByEmail(loginRequest.email);

        if (user == null)
            return Unauthorized("Invalid credentials");

        // Verify the password here (compare password hash)
        string providedPasswordHash = loginRequest.password;//Hash the provided password here

        if (user.pwdHash != providedPasswordHash)
            return Unauthorized("Invalid credentials");

        // Password is valid, generate a JWT token
        var token = GenerateJwtToken(user);
        return Ok(new { Token = token });
    }

    [HttpPut("{userId}/update-email")]
    public IActionResult UpdateUserEmail(int userId, User userUpdate)
    {
        var existingUser = _userService.GetUserById(userId);

        if (existingUser == null)
            return NotFound($"User with ID {userId} not found");

        // Perform the update
        _userService.UpdateUserEmail(userId, userUpdate.email);

        return Ok();
    }

    [HttpPut("{userId}/update-password")]
    public IActionResult UpdateUserPassword(int userId, [FromBody] User userUpdate)
    {
        var existingUser = _userService.GetUserById(userId);

        if (existingUser == null)
        {
            return NotFound($"User with ID {userId} not found");
        }

        // Update user properties based on the request
        existingUser.pwdHash = userUpdate.pwdHash; // Replace with actual password hashing logic

        // Perform the update
        _userService.UpdateUserPassword(userId, userUpdate.pwdHash); // Use the hashed password here

        return Ok();
    }

    [HttpDelete("{userId}")]
    public IActionResult DeleteUser(int userId)
    {
        var existingUser = _userService.GetUserById(userId);

        if (existingUser == null)
            return NotFound($"User with ID {userId} not found");

        // Perform the delete
        _userService.DeleteUser(userId);

        return Ok();
    }

    [HttpGet("protected")]
    [Authorize] // Add the [Authorize] attribute to protect this endpoint
    public IActionResult Protected()
    {
        // This endpoint is protected, only accessible with a valid JWT token
        return Ok(new { Message = "Access granted to Movie Database!" });
    }

    string GenerateJwtToken(User user)
    {
        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_secretKey.PadRight(16)));
        var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

        var claims = new List<Claim>
        {
            new Claim(ClaimTypes.Name, user.email),
            new Claim(ClaimTypes.NameIdentifier, user.userId.ToString()),
            //Add more claims as needed (e.g., user roles).
        };

        var token = new JwtSecurityToken(
            issuer: "YourIssuer",
            audience: "YourAudience",
            claims: claims,
            expires: DateTime.UtcNow.AddHours(1), // Token expiration time
            signingCredentials: credentials
        );

        return new JwtSecurityTokenHandler().WriteToken(token);
    }
}
