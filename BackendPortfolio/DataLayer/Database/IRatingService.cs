using DataLayer.Models;

namespace DataLayer.Database;

public interface IRatingService
{
    public IList<Rating> GetRatingHistory();
    public IList<Rating> GetRatingistoryByUserId(int _userID);
    public Rating CreateRating(String titleID, int userID, int grade, String reviewText, String rateDate);
    public List<Rating> ReadRatingsForMovie(String titleID);
    public void UpdateRating(String titleID, int userID, int newRatingValue, string newReview, String rateDate);
    public void DeleteRating(String titleID, int userID);
}
