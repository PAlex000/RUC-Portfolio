using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataLayer.Models
{
    public class PersonAssociation
    {
        public string titleId { get; set; }
        public string personId { get; set; }
        public int ordering { get; set; }
        public float job {  get; set; }
    }
}
