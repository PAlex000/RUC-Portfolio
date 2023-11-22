namespace WebServer.Models
{
    public class CreateUserModel
    {
        public int userID { get; set; }
        public string? firstName { get; set; }
        public string? lastName { get; set; }
        public string? email { get; set; }
        public string? password { get; set; }
        public string? phoneNo { get; set; }
    }
}
