using DataLayer.Models;

namespace DataLayer.Database;

public interface IRatingService
{
    public IList<Rating> GetRatingHistory();
    public IList<Rating> GetRatingHistoryByUserId(int _userId);
    public Rating GetRatingByUserIdAndTitleId(int _userId, string _titleId);
    public Rating CreateRating(string _titleId, int _userId, int _grade, string _reviewText);
    public List<Rating> ReadRatingsForMovie(string _titleId);
    public void UpdateRating(string _titleId, int _userId, int newRatingValue, string newReview);
    public void DeleteRating(string _titleId, int _userId);
}