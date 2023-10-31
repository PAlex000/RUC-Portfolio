namespace backend.Models
{
    public class Search
    {
        public int userID { get; set; }
        public string? searchString { get; set; }
        public DateTime searchDate { get; set; }
    }
}
