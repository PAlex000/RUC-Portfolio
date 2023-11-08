using DataLayer.Models;
using System.Collections.Generic;

namespace DataLayer.Database
{
    public interface IUserService
    {
        public IList<User> GetUsers();
        public User GetUserById(int _userId);
        public User GetUserByEmail(string _email);
        public User CreateUser(string _firstName, string _lastName, string _email, string _pwdHash, string _phoneNo = null);
        public bool UpdateUserEmail(int _userid, string _email);
        public bool UpdateUserPassword(int _userid, string _pwdHash);
        public bool DeleteUser(User user);
        public bool DeleteUser(int _userid);
    }
}
