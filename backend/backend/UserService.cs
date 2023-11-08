using backend.Models;
using System.Collections.Generic;
using System.Linq;

namespace backend
{
    public class UserService : IUserService
    {
        private readonly MovieContext db = new MovieContext();
        public IList<User> GetUsers()
        {
            return db.Users.ToList();
        }
        public User? GetUserById(int _userId)
        {
            return db.Users.FirstOrDefault(x => x.userID == _userId);
        }
        public User? GetUserByEmail(string _email)
        {
            return db.Users.FirstOrDefault(x => x.email == _email);
        }
        public User CreateUser(string _firstName, string _lastName, string _email, string _pwdHash, string _phoneNo = null)
        {
            int id = db.Users.Max(x => x.userID) + 1;
            User user = new User
            {
                userID = id,
                firstName = _firstName,
                lastName = _lastName,
                email = _email,
                pwdHash = _pwdHash,
                phoneNo = _phoneNo,
                isVerified = false,
                isActive = false
            };
            db.Add(user);
            db.SaveChanges();
            return user;
        }
        public bool UpdateUserEmail(int _userid, string _email)
        {
            User user = db.Users.FirstOrDefault(x => x.userID == _userid);
            if (user != null)
            {
                user.email = _email;
                db.SaveChanges();
                return true;
            }
            return false;
        }
        public bool UpdateUserPassword(int _userid, string _pwdHash)
        {
            User user = db.Users.FirstOrDefault(x => x.userID == _userid);
            if (user != null)
            {
                user.pwdHash = _pwdHash;
                db.SaveChanges();
                return true;
            }
            return false;
        }
        public bool DeleteUser(User user)
        {
            return DeleteUser(user.userID);
        }
        public bool DeleteUser(int _userid)
        {
            User user = db.Users.FirstOrDefault(x => x.userID == _userid);
            if (user != null)
            {
                db.Users.Remove(user);
                return db.SaveChanges() > 0;
            }
            return false;
        }
    }
}
