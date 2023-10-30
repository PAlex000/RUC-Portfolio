using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace bookmark.Models
{
    public class Bookmark
    {
        public int ID { get; set; }
        public string titleID { get; set; }
        public int userID { get; set; }
        public bool status { get; set; }
    }
}