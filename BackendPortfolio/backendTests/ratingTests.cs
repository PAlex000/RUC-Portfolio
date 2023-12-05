using backend.Webserver.Models;
using DataLayer.Database;
using DataLayer.Models;
using Newtonsoft.Json;
using System.Text;
using WebServer.Controllers;
using WebServer.Models;
using Xunit;

namespace BackendTests
{
    public class RatingTests
    {
        private readonly HttpClient _httpClient;


        public RatingTests()
        {
            _httpClient = new HttpClient
            {
                BaseAddress = new Uri("http://localhost:5001")
            };
        }
        [Fact]
        public async Task GetRatingHistory_ReturnsOkResult_WithRatingHistory()
        {
            var service = new RatingService();
            var request = service.GetRatingHistory();
            var response = await _httpClient.GetAsync("/api/ratings");
            response.EnsureSuccessStatusCode();
        }

        [Fact]
        public async Task CreateRating_ReturnsCreatedAtActionResult_WithNewRating()
        {
            var createRatingModel = new CreateRatingModel { userId = 1, titleId = "tt16896916", grade = 5, reviewText = "Great movie!" };
            var content = new StringContent(JsonConvert.SerializeObject(createRatingModel), Encoding.UTF8, "application/json");
            var response = await _httpClient.PostAsync("/api/ratings", content);
            response.EnsureSuccessStatusCode();
        }
        
        [Fact]
        public async Task UpdateRating_ReturnsOkResult_WithUpdatedRating()
        { 
            var createRatingModel = new CreateRatingModel { userId = 2, titleId = "tt16896916", grade = 5, reviewText = "Great movie!" };
            var createContent = new StringContent(JsonConvert.SerializeObject(createRatingModel), Encoding.UTF8, "application/json");
            var createResponse = await _httpClient.PostAsync("/api/ratings", createContent);
            createResponse.EnsureSuccessStatusCode();
            var createdRating = JsonConvert.DeserializeObject<Rating>(await createResponse.Content.ReadAsStringAsync());
            createdRating.grade = 4;
            createdRating.reviewText = "Still a good movie, but not perfect";
            var updateContent = new StringContent(JsonConvert.SerializeObject(createdRating), Encoding.UTF8, "application/json");
            var updateResponse = await _httpClient.PutAsync($"/api/ratings/{createdRating.titleId}/{createdRating.userId}", updateContent);
            updateResponse.EnsureSuccessStatusCode();
        }

        [Fact]
        public async Task GetRatingsByUserId_ReturnsOkResult_WithRatings()
        {
            var response = await _httpClient.GetAsync("/api/ratings/ByUserId/1");
            response.EnsureSuccessStatusCode();
        }

        [Fact]
        public async Task DeleteRating_ReturnsOkResult()
        {
           
            var createRatingModel = new CreateRatingModel { userId = 5, titleId = "tt3644670", grade = 5, reviewText = "Great movie!" };
            var createContent = new StringContent(JsonConvert.SerializeObject(createRatingModel), Encoding.UTF8, "application/json");
            var createResponse = await _httpClient.PostAsync("/api/ratings", createContent);
            createResponse.EnsureSuccessStatusCode();
            var createdRating = JsonConvert.DeserializeObject<Rating>(await createResponse.Content.ReadAsStringAsync());
            var deleteResponse = await _httpClient.DeleteAsync($"/api/ratings/{createdRating.titleId}/{createdRating.userId}");
            deleteResponse.EnsureSuccessStatusCode();
        }
    }
}
