using DataLayer.Models;

namespace DataLayer.Database;

public interface IRatingService
{
    public IList<Rating> GetRatingHistory();
    public IList<Rating> GetRatingistoryByUserId(int _userID);
    public Rating GetRatingByUserIdAndTitleId(int userId, string titleId);
    public Rating CreateRating(String titleID, int userID, int grade, String reviewText);
    public List<Rating> ReadRatingsForMovie(String titleID);
    public void UpdateRating(String titleID, int userID, int newRatingValue, string newReview);
    public void DeleteRating(String titleID, int userID);
}