namespace WebServer.Models;

public class SearchModel
{
    public string url { get; set; }
    public int userId { get; set; }
    public string searchString { get; set; }
    public DateTime searchDate { get; set; }
}
