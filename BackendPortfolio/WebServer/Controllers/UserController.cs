using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using DataLayer.Database;
using DataLayer.Models;
using WebServer.Models;
using Microsoft.AspNetCore.Authorization;

[Route("api/User")]
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
    // Get user history
    [HttpGet]
    public ActionResult<IList<User>> GetUserHistory()
    {
        var userHistory = _userService.GetUserHistory();
        if (userHistory == null || userHistory.Count == 0)
        {
            return NotFound("No user history found.");
        }
        return Ok(userHistory);
    }
    [HttpPost("register")]
    public IActionResult Register([FromBody] CreateUserModel userRequest)
    {
        // Check if a user with the provided email already exists
        var existingUser = _userService.GetUserByEmail(userRequest.Email);

        if (existingUser != null)
        {
            return BadRequest("Email is already in use");
        }

        // Hash and salt the password (secure hashing library?)
        string passwordHash = userRequest.Password;

        // Create the user and store it in the database
        User user = _userService.CreateUser(
            userRequest.FirstName,
            userRequest.LastName,
            userRequest.Email,
            userRequest.Password,
            userRequest.PhoneNo
        );

        var token = GenerateJwtToken(user);
        return Ok(new { Token = token });
    }

    [HttpPost("login")]
    public IActionResult Login([FromBody] UserModel loginRequest)
    {
        // Find the user by email
        var user = _userService.GetUserByEmail(loginRequest.email);

        if (user == null)
        {
            return Unauthorized("Invalid credentials");
        }

        // Verify the password here (compare password hash)
        string providedPasswordHash = loginRequest.password;//Hash the provided password here

        if (user.pwdHash != providedPasswordHash)
        {
            return Unauthorized("Invalid credentials");
        }

        // Password is valid, generate a JWT token
        var token = GenerateJwtToken(user);
        return Ok(new { Token = token });
    }

    [HttpGet("protected")]
    [Authorize] // Add the [Authorize] attribute to protect this endpoint
    public IActionResult Protected()
    {
        // This endpoint is protected, only accessible with a valid JWT token
        // Extract user information from User.Identity.Name and User.Claims as needed
        return Ok(new { Message = "Access granted to Movie Database!" });
    }

    private string GenerateJwtToken(User user)
    {
        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_secretKey.PadRight(16)));
        var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

        var claims = new List<Claim>
        {
            new Claim(ClaimTypes.Name, user.email),
            new Claim(ClaimTypes.NameIdentifier, user.userID.ToString()),
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
