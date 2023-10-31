using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace backend.Models
{
   public class Rating
    {
        public int TitleID { get; set; }
        public int UserID { get; set; }
        public int Grade { get; set; }
        public string? ReviewText { get; set; }
        public DateTime? RateDate { get; set; }
    }
}