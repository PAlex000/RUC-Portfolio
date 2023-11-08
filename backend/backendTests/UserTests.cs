using backend;
using backend.Models;

namespace backendTests
{
    public class UserTests
    {
        [Fact]
        public void User_Object_HasUserIDFirstNameLastNameEmailPwdHashPhoneNoIsVerifiedIsActive()
        {
            User user = new User();
            Assert.Equal(0, user.userID);
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
            Assert.Equal(4, users.Count);
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
            var user = service.CreateUser("firstName", "lastName", "rteszr@gmail.clm", "123asd");
            var result = service.DeleteUser(user.userID);
            Assert.True(result);
            user = service.GetUserById(user.userID);
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
