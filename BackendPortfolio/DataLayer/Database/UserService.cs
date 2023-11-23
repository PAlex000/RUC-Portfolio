using DataLayer.Models;
using System.Collections.Generic;
using System.Linq;

namespace DataLayer.Database;

public class UserService : IUserService
{
    private readonly MovieContext db = new MovieContext();

    public IList<User> GetUsers()
    {
        return db.Users.ToList();
    }

    public User? GetUserById(int _userId)
    {
        return db.Users.FirstOrDefault(x => x.userId == _userId);
    }
    public User? GetUserByEmail(string _email)
    {
        return db.Users.FirstOrDefault(x => x.email == _email);
    }

    public bool CreateUser(string _firstName, string _lastName, string _email, string _pwdHash, string _phoneNo = null)
    {
        int Id = db.Users.Max(x => x.userId) + 1;
        User user = new User
        {
            userId = Id,
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
        return true;
    }
    public bool UpdateUserEmail(int _userId, string _email)
    {
        User user = db.Users.FirstOrDefault(x => x.userId == _userId);
        if (user != null)
        {
            user.email = _email;
            db.SaveChanges();
            return true;
        }
        return false;
    }

    public bool UpdateUserPassword(int _userId, string _pwdHash)
    {
        User user = db.Users.FirstOrDefault(x => x.userId == _userId);
        if (user != null)
        {
            user.pwdHash = _pwdHash;
            db.SaveChanges();
            return true;
        }
        return false;
    }

    public bool UpdateUserProperties(int _userId, string _firstName = null, string _lastName = null, string _email = null, string _phoneNo = null)
    {
        User user = db.Users.FirstOrDefault(x => x.userId == _userId);

        if (user != null)
        {
            if (_firstName != null)
                user.firstName = _firstName;

            if (_lastName != null)
                user.lastName = _lastName;

            if (_email != null)
                user.email = _email;

            if (_phoneNo != null)
                user.phoneNo = _phoneNo;

            db.SaveChanges();
            return true;
        }
        return false;
    }
    public bool DeleteUser(int _userId)
    {
        User user = db.Users.FirstOrDefault(x => x.userId == _userId);
        if (user != null)
        {
            db.Users.Remove(user);
            return db.SaveChanges() > 0;
        }
        return false;
    }
}
