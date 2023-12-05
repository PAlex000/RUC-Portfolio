using DataLayer.Database;
using DataLayer.Models;
using Newtonsoft.Json;
using System.Text;
using WebServer.Controllers; 
using WebServer.Models;
using Xunit;

namespace BackendTests
{
    public class UserTests
    {
        private readonly HttpClient _httpClient;

        public UserTests()
        {
            _httpClient = new HttpClient
            {
                BaseAddress = new Uri("http://localhost:5001")
            };
        }

        [Fact]
        public void User_Object_HasUserIDFirstNameLastNameEmailPwdHashPhoneNoIsVerifiedIsActive()
        {
            User user = new User();
            Assert.Equal(0, user.userId);
            Assert.Null(user.firstName);
            Assert.Null(user.lastName);
            Assert.Null(user.email);
            Assert.Null(user.pwdHash);
            Assert.Null(user.phoneNo);
            Assert.False(user.isVerified);
            Assert.False(user.isActive);
        }
        [Fact]
        public void GetAlUsers_NoArgument_ReturnsAllUsers()
        {
            var service = new UserService();
            var users = service.GetUsers();
            Assert.Equal(5, users.Count);
            Assert.Equal("Lasse", users.First().firstName);
        }


        [Fact]
        public void GetUser_ValidUserId_ReturnsUserObject()
        {
            var service = new UserService();
            var user = service.GetUserById(1);
            Assert.Equal("Lasse", user?.firstName);
            Assert.Equal("Doe", user?.lastName);
            Assert.Equal("lasse.doe@example.com", user?.email);
        }
        [Fact]
        public void DeleteUser_ValidId_RemoveUser()
        {
            var service = new UserService();
            service.CreateUser("firstName", "lastName", "rteszr@gmail.clm", "123", "123asd");
            var user = service.GetUserByEmail("rteszr@gmail.clm");
            var result = service.DeleteUser(user.userId);
            Assert.True(result);
            user = service.GetUserById(user.userId);
            Assert.Null(user);
        }
        [Fact]
        public void DeleteUser_InvalidUserId_ReturnsFalse()
        {
            var service = new UserService();
            var result = service.DeleteUser(-1);
            Assert.False(result);
        }
    }
}
