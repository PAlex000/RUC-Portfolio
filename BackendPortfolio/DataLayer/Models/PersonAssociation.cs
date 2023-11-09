using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataLayer.Models
{
    public class PersonAssociation
    {

        public string PersonId { get; set; }

        public string TitleId { get; set; }

        public int Ordering { get; set; }

        public string Job { get; set; }

        public virtual Person Person { get; set; }
    }
}
