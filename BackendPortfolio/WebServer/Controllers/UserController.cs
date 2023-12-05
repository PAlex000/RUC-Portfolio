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
using System.Security.Cryptography;

[Route("api/user")]
[ApiController]
public class UserController : ControllerBase
{
    private readonly IUserService _userService;
    private readonly LinkGenerator _linkGenerator;
    private readonly IAuthService _authService;

    public UserController(IUserService userService, LinkGenerator linkGenerator, IAuthService aservice)
    {
        _userService = userService;
        _linkGenerator = linkGenerator;
        _authService = aservice;
    }
    [HttpGet]
    public ActionResult<IList<User>> GetUsers()
    {
        var users = _userService.GetUsers();
        if (users == null || !users.Any())
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


        var hashResult = _authService.Hash(userRequest.password);
        string passwordHash = hashResult.Item1;
        string salt = hashResult.Item2;

        // Create the user and store it in the database
        _userService.CreateUser(
            userRequest.firstName,
            userRequest.lastName,
            userRequest.email,
            salt,
            passwordHash,
            userRequest.phoneNo
        );
        User user = _userService.GetUserByEmail(userRequest.email);

        var token = _authService.GenerateJwtToken(user);
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
       bool isPasswordValid =_authService.Verify(loginRequest.email,loginRequest.password);

        if (!isPasswordValid)
            return Unauthorized("Invalid credentials");

        // Password is valid, generate a JWT token
        var token = _authService.GenerateJwtToken(user);
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

        existingUser.pwdHash = userUpdate.pwdHash;

        // Perform the update
        _userService.UpdateUserPassword(userId, userUpdate.pwdHash);

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
}
