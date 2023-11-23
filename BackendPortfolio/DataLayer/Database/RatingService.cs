using DataLayer.Database;
using DataLayer.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;

public class RatingService : IRatingService
{
    private readonly MovieContext db = new MovieContext();

    public IList<Rating> GetRatingHistory()
    {
        return db.RatingsHistory.ToList();
    }

    public IList<Rating> GetRatingHistoryByUserId(int _userID)
    {
        return db.RatingsHistory
            .Where(x => x.userId == _userID)
            .Select(x => new Rating
            {
                titleId = x.titleId,
                userId = _userID,
                reviewText = x.reviewText,
                grade = x.grade,
                rateDate = x.rateDate
            })
            .ToList();
    }

    public Rating GetRatingByUserIdAndTitleId(int _userID, string _titleId)
    {
        return db.RatingsHistory.FirstOrDefault(r => r.userId == _userID && r.titleId == _titleId);
    }

    public Rating CreateRating(string _titleId, int _userId, int _grade, string _reviewText)
    {
        // Check if the rating with the same UserID and TitleID already exists
        var existingRating = GetRatingByUserIdAndTitleId(_userId, _titleId);
        if (existingRating != null)
        {
            return null; // Indicate that the rating already exists
        }

        // Create a new rating
        var rating = new Rating
        {
            titleId = _titleId,
            userId = _userId,
            grade = _grade,
            reviewText = _reviewText
        };

        db.Add(rating);
        db.SaveChanges();
        return rating;
    }

    public List<Rating> ReadRatingsForMovie(string _titleID)
    {
        var ratings = db.RatingsHistory.Where(r => r.titleId == _titleID).ToList();

        if (ratings.Count() == 0)
            return null;

        return ratings;
    }

    public void UpdateRating(string _titleID, int _userID, int newRatingValue, string newReview)
    {
        var rating = db.RatingsHistory.FirstOrDefault(r => r.titleId == _titleID && r.userId == _userID);
        if (rating != null)
        {
            rating.grade = newRatingValue;
            rating.reviewText = newReview;
            db.SaveChanges();
        }
    }

    public void DeleteRating(string _titleID, int _userID)
    {
        var rating = db.RatingsHistory.FirstOrDefault(r => r.titleId == _titleID && r.userId == _userID);
        if (rating != null)
        {
            db.RatingsHistory.Remove(rating);
            db.SaveChanges();
        }
    }
}
