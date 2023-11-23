using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace backend.Webserver.Models
{
    public class CreateRatingModel
    {
        public string titleId { get; set; }
        public int userId { get; set; }
        public int grade { get; set; }
        public string? reviewText { get; set; }
    }
}