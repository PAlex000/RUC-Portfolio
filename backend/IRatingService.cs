using backend.Models;

namespace backend
{
    public interface IRatingService
    {
        public List<Rating> ReadRatingsForMovie(int titleID);
        public void CreateRating(int titleID, int userID, int grade, string reviewText);
        public void UpdateRating(int ratingId, int newRatingValue, string newReview);
        public void DeleteRating(int ratingId);
        public void UpdateAverageRating(int titleID);
    }
}
