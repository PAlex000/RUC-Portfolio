using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace backend.Models
{
    internal class TitleAkas
    {
        public string? titleID {  get; set; }
        public int ordering {  get; set; }
        public string? title { get; set; }
        public string? region { get; set; }
        public string? attribute { get; set; }
        public string? typeName { get; set; }
        public string? languagename { get; set; }
        public bool isOriginalTitle { get; set; }

    }
}
