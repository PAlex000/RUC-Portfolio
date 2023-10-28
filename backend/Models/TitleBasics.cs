using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace backend.Models
{
    internal class TitleBasics
    {
        public string titleID { get; set; }
        public string type { get; set; }
        public bool isAdult { get; set; }
        public string startYear { get; set; }
        public string endYear { get; set; }
        public string poster {  get; set; }
        public string description { get; set; }
        public int rating { get; set; }

    }
}
