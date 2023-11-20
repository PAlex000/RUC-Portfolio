using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataLayer.Models
{
    public class PersonAssociation
    {
        public string TitleID { get; set; }
        public string PersonID { get; set; }
        public int Ordering { get; set; }
    }
}
