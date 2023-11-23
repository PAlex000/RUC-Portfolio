using DataLayer.Models;
using System.Collections.Generic;

namespace DataLayer.Database
{
    public interface IUserService
    {
        public IList<User> GetUsers();
        public User GetUserById(int _userId);
        public User GetUserByEmail(string _email);
        public bool CreateUser(string _firstName, string _lastName, string _email, string _pwdHash, string _phoneNo = null);
        public bool UpdateUserEmail(int _userId, string _email);
        public bool UpdateUserPassword(int _userId, string _pwdHash);

        public bool UpdateUserProperties(int _userId, string _firstName = null, string _lastName = null, string _email = null, string _phoneNo = null);
        public bool DeleteUser(int _userId);
    }
}
