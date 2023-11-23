using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataLayer.Models
{
    public class Movie
    {
        [Key]
        public String titleId { get; set; }
        public string? titleName { get; set; }
        public Rating? rating { get; set; }
        public double averageRating { get; set; }
    }
}
