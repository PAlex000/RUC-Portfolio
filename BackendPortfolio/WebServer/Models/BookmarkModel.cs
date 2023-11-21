namespace WebServer.Models;

public class BookmarkModel
{
    public string Url { get; set; }
    public string? titleID { get; set; }
    public int userID { get; set; }
    public bool status { get; set; }
}
