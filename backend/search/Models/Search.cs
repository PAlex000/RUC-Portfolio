namespace search.Models
{
    //TODO: DateTime.now cannot be converted to Datetime for some reason
    public class Search
    {
        public int userID { get; set; }
        public string? searchString { get; set; }
        public DateTime searchDate { get; set; }
    }
}
