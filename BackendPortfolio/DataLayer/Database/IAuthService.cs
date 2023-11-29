using DataLayer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataLayer.Database
{
    public interface IAuthService
    {
        public (string Hash, string SaltString) Hash(string password);
        public string GenerateJwtToken(User user);

        public bool Verify(string userEmail, string login_password);

    }
}
