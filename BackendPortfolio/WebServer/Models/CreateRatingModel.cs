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
        [Required(ErrorMessage = "The TitleID field is required.")]
        public string TitleID { get; set; }

        [Required(ErrorMessage = "The UserID field is required.")]
        public int UserID { get; set; }

        [Required(ErrorMessage = "The Grade field is required.")]
        public int Grade { get; set; }

        //Add additional validation attributes for ReviewText if needed
        public string? ReviewText { get; set; }
    }
}