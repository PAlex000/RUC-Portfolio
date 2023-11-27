using DataLayer.Database;
using DataLayer.Models;
using Newtonsoft.Json;
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
    }
}