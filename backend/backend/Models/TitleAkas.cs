using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace backend.Models
{
    public class TitleAkas
    {
        public string? ID {  get; set; }
        public int ordering {  get; set; }
        public string? title { get; set; }
        public string? region { get; set; }
        public string? attribute { get; set; }
        public string? type { get; set; }
        public string? language { get; set; }
        public bool isOriginalTitle { get; set; }
        public TitleBasics Basics { get; set; }

    }
}
