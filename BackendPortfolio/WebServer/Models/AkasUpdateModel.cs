namespace WebServer.Models;
public class AkasUpdateModel
{
    public string? Id { get; set; }
    public int ordering { get; set; }
    public string title { get; set; }
    public string region { get; set; }
    public string attribute { get; set; }
    public string type { get; set; }
    public string language { get; set; }
    public bool isOriginalTitle { get; set; }
}
