using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataLayer.Models
{
   public class Rating
    {
        public string titleId { get; set; }
        public int userId { get; set; }
        public int grade {  get; set; }
        public string? reviewText { get; set; }
        public DateTime rateDate { get; set; }
    }
}
