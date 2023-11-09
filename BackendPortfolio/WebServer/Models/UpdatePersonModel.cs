namespace WebServer.Models
{
    public class UpdatePersonModel
    {
        public string Id { get; set; }
        public string? PrimaryName { get; set; }
        public string? DateOfBirth { get; set; }
        public string? DateOfDeath { get; set; }
    }
}
