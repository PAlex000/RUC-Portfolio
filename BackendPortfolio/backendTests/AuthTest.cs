using DataLayer.Database;
using DataLayer.Models;
using Newtonsoft.Json;
using System.Security.Cryptography;
using System.Text;
using WebServer.Controllers;
using WebServer.Models;
using Xunit;

namespace BackendTests
{
    public class AuthTests
    {
        private readonly HttpClient _httpClient;

        public AuthTests()
        {
            _httpClient = new HttpClient
            {
                BaseAddress = new Uri("http://localhost:5001")
            };
        }
        [Fact]
        public async Task Login_ValidCredentials_ReturnsToken()
        {
            var loginRequest = new UserModel { email = "lasse.doe@example.com", password = "hashed_password1" };
            var content = new StringContent(JsonConvert.SerializeObject(loginRequest), Encoding.UTF8, "application/json");

            var response = await _httpClient.PostAsync("/api/user/login", content);

            response.EnsureSuccessStatusCode();
            var responseContent = await response.Content.ReadAsStringAsync();
            var token = JsonConvert.DeserializeAnonymousType(responseContent, new { Token = "" });
            Assert.NotNull(token.Token);
        }
        [Fact]
        public void Hash_ShouldReturnValidTuple()
        {
            var authService = new AuthService();

            var result = authService.Hash("password123");

            Assert.NotNull(result);
            Assert.NotNull(result.Hash);
            Assert.NotNull(result.SaltString);
        }
        [Fact]
        public void Verify_CorrectPassword_ShouldReturnTrue()
        {
           
            var authService = new AuthService();
            var userService = new UserService();
            var userEmail = "john.smith@example.com";
            var userPassword = "securepassword";

            var isValid = authService.Verify(userEmail, userPassword);
            Assert.True(isValid);
        }
        [Fact]
        public void Verify_IncorrectPassword_ShouldReturnFalse()
        {
            
            var authService = new AuthService();
            var userService = new UserService();
            var userEmail = "john.smith@example.com";
            var correctPassword = "securepassword"; 
            var incorrectPassword = "securepassword2"; 

            var hashResult = authService.Hash(correctPassword);
            var registeredUser = userService.GetUserByEmail(userEmail);

            var isValid = authService.Verify(userEmail, incorrectPassword);

            Assert.False(isValid);
        }
    }
}