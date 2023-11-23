using System;

namespace DataLayer.Models
{
    public class Search
    {
        public int userId { get; set; }
        public string searchString { get; set; }
        public DateTime searchDate { get; set; }
    }
}
