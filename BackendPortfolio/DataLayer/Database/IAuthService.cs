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
        public string GenerateJwtToken(User user);
    }
}
