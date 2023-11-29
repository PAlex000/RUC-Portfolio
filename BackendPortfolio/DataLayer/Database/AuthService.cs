using DataLayer.Database;
using DataLayer.Models;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Security.Cryptography;
using System.Data.SqlTypes;

public class AuthService : IAuthService 
{
    private readonly string _secretKey = "YourSecretKey";
    private readonly Hashing _hashing = new Hashing();
    private readonly UserService _userService = new UserService();

    public (string Hash, string SaltString) Hash(string password)
    {
        var hashResult = _hashing.Hash(password);
        return (hashResult.Item1, hashResult.Item2);
    }

    public string GenerateJwtToken(User user)
    {
        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_secretKey.PadRight(16)));
        var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

        var claims = new List<Claim>
        {
            new Claim(ClaimTypes.Name, user.email),
            new Claim(ClaimTypes.NameIdentifier, user.userId.ToString()),
            //Add more claims as needed (ex user roles).
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

    public bool Verify(string userEmail, string login_password)
    {
        User registeredUser = _userService.GetUserByEmail(userEmail);

        if (registeredUser == null)
        {
            // Handle the case where the user with the provided email is not found
            return false;
        }
        string hashedRegisteredPassword = registeredUser.pwdHash;
        string saltString = registeredUser.salt;

        string hashedLoginPassword = _hashing.HashSHA256(login_password, saltString);

      
        if (hashedRegisteredPassword.Equals(hashedLoginPassword)) return true;
        else return false;
    }

    public class Hashing
    {
        const int salt_bitsize = 64;
        public const byte salt_bytesize = salt_bitsize / 8;

        private HashAlgorithm sha256 = SHA256.Create();
        protected RandomNumberGenerator rand = RandomNumberGenerator.Create();

        public virtual (string Hash, string SaltString) Hash(string password)
        {
            byte[] salt = new byte[salt_bytesize];
            rand.GetBytes(salt);
            string saltString = Convert.ToHexString(salt);
            string hash = HashSHA256(password, saltString);
            return (hash, saltString);
        }

        public string HashSHA256(string password, string saltString)
        {
            byte[] hashInput = Encoding.UTF8.GetBytes(saltString + password);
            byte[] hashOutput = IteratedSHA256(hashInput, 100000);
            return Convert.ToHexString(hashOutput);
        }

        private byte[] IteratedSHA256(byte[] hashInput, int iterations)
        {
            byte[] hashValue = { };
            for (int i = 0; i < iterations; i++)
            {
                hashValue = sha256.ComputeHash(hashInput);
                hashInput = hashValue;
            }
            return hashValue;
        }
    }
}