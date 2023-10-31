using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend
{
    class RatingService
    {
        private readonly MovieContext _context;

        public RatingService(MovieContext context)
        {
            _context = context;
        }

        public void CreateRating(int titleID, int userID, int grade, string reviewText)
        {
            var rating = new Rating
            {
                TitleID = titleID,
                UserID = userID,
                Grade = grade,
                ReviewText = reviewText
            };

            _context.Ratings.Add(rating);
            _context.SaveChanges();
        }

        public List<Rating> ReadRatingsForMovie(int titleID)
        {
            return _context.Ratings.Where(r => r.TitleID == titleID).ToList();
        }

        public void UpdateRating(int ratingId, int newRatingValue, string newReview)
        {
            var rating = _context.Ratings.Find(ratingId);
            if (rating != null)
            {
                rating.Grade = newRatingValue;
                rating.ReviewText = newReview;
                _context.SaveChanges();
                UpdateAverageRating(rating.TitleID);
            }
        }

        public void DeleteRating(int ratingId)
        {
            var rating = _context.Ratings.Find(ratingId);
            if (rating != null)
            {
                _context.Ratings.Remove(rating);
                _context.SaveChanges();
                UpdateAverageRating(rating.TitleID);
            }
        }

        private void UpdateAverageRating(int titleID)
        {
            var ratings = _context.Ratings.Where(r => r.TitleID == titleID).ToList();
            var movie = _context.Movies.Find(titleID);

            if (ratings.Count > 0)
            {
                movie.AverageRating = ratings.Average(r => r.Grade);
            }
            else
            {
                movie.AverageRating = 0;
            }

            _context.SaveChanges();
        }
    }
}
