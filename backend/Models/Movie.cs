using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace backend.Models
{
    public class Movie
    {
        public int TitleID { get; set; }
        public string? TitleName { get; set; }
        public double AverageRating { get; set; }
    }
}
