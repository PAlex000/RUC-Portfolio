namespace DataLayer.Models
{
    public class User
    {
        public int userId {  get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public string email { get; set; }
        public string salt { get; set; }
        public string pwdHash { get; set; }
        public string? phoneNo {  get; set; }
        public bool isVerified { get; set; }
        public bool isActive {  get; set; }
    }
}
