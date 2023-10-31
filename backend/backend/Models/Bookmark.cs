namespace backend.Models
{
    public class Bookmark
    {
        public int ID { get; set; }
        public string? titleID { get; set; }
        public int userID { get; set; }
        public bool status { get; set; }
    }
}