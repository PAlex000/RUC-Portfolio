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

        public void CreateRating(String titleID, int averageRating, int numVotes)
        {
            var rating = new Rating
            {
                TitleID = titleID,
                AverageRating = averageRating,
                NumVotes = numVotes,
            };

            _context.Ratings.Add(rating);
            _context.SaveChanges();
        }

        public List<Rating> ReadRatingsForMovie(String titleID)
        {
            return _context.Ratings.Where(r => r.TitleID == titleID).ToList();
        }

        public void UpdateRating(String titleID, int grade)
        {
            var rating = _context.Ratings.Find(titleID);
            if (rating != null)
            {
                rating.Grade = newRatingValue;
                rating.ReviewText = newReview;
                _context.SaveChanges();
                UpdateAverageRating(rating.TitleID);
            }
        }

        public void DeleteRating(String ratingId)
        {
            var rating = _context.Ratings.Find(ratingId);
            if (rating != null)
            {
                _context.Ratings.Remove(rating);
                _context.SaveChanges();
                UpdateAverageRating(rating.TitleID);
            }
        }

        private void UpdateAverageRating(String titleID)
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
