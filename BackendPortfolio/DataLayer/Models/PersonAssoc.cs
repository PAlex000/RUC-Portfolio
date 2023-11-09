using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataLayer.Models
{
    public class PersonAssoc
    {
        public string titleid { get; set; }

        public string personid { get; set; }
        public int ordering { get; set; }
        public string job { get; set; }
        public virtual TitleBasics TitleBasics { get; set; }
    }
}
