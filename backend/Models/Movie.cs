using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace backend.Models
{
    public class Movie
    {
        [Key]
        public String TitleID { get; set; }
        public string? TitleName { get; set; }
        public Rating? Rating { get; set; }
        public double AverageRating { get; set; }
    }
}
