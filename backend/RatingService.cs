using backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace backend
{
    public class RatingService : IRatingService
    {
        private readonly RatingContext  db = new RatingContext();

        public IList<Rating>GetRatings(int titleID)
        {
            var ratings = db.Ratings.Where(r => r.TitleID == titleID).ToList();

            return ratings;
        }

        public double GetAverageRating(int titleID)
        {
            var ratings = db.Ratings.Where(r => r.TitleID == titleID).ToList();
            if (ratings.Count > 0)
            {
                return ratings.Average(r => r.Grade);
            }
            return 0; // Return 0 if there are no ratings yet.
        }

        public void RateMovie(int titleID, int userID, int grade, string reviewText)
        {
            var rating = new Rating
            {
                TitleID = titleID,
                UserID = userID,
                Grade = grade,
                ReviewText = reviewText
            };

            db.Ratings.Add(rating);
            db.SaveChanges();
        }
    }
}
