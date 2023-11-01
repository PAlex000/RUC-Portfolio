using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace backend.Models
{
   public class Rating
    {
        public string TitleID { get; set; }
        public int AverageRating { get; set; }
        public int NumVotes {  get; set; }
    }
}