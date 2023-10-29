using backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace backend
{
    public interface IRatingService
    {
        IList<Rating> GetRatings(int titleID);
    }
}
