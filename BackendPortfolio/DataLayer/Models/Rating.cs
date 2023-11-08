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
        [Required]
        public String TitleID { get; set; }
        [Required]
        public int UserID { get; set; }
        [Required]
        public int Grade {  get; set; }
        public String ReviewText { get; set; }
        public String RateDate { get; set; }
    }
}
