using DataLayer.Database;
using DataLayer.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;

class RatingService : IRatingService
{
    private readonly MovieContext db = new MovieContext();

    public IList<Rating> GetRatingHistory()
    {
        var ratings = db.RatingsHistory.ToList();
        return ratings;
    }

    public IList<Rating> GetRatingistoryByUserId(int _userID)
    {
        return db.RatingsHistory
            .Where(x => x.UserID == _userID)
            .Select(x => new Rating
            {
                TitleID = x.TitleID,
                UserID = _userID,
                ReviewText = x.ReviewText,
                Grade = x.Grade,
                RateDate = x.RateDate
            })
            .ToList();
    }

    public Rating CreateRating(String titleID, int userID, int grade, String reviewText, String rateDate)
    {
        var rating = new Rating
        {
            TitleID = titleID,
            UserID = userID,
            Grade = grade,
            ReviewText = reviewText,
            RateDate = rateDate
        };

        db.Add(rating);
        db.SaveChanges();
        Console.WriteLine("Rating created successfully.");
        return rating;
    }

    public List<Rating> ReadRatingsForMovie(String titleID)
    {
        return db.RatingsHistory.Where(r => r.TitleID == titleID).ToList();
    }

    public void UpdateRating(String titleID, int userID, int newRatingValue, string newReview, String rateDate)
    {
        var rating = db.RatingsHistory.FirstOrDefault(r => r.TitleID == titleID && r.UserID == userID);
        if (rating != null)
        {
            rating.Grade = newRatingValue;
            rating.ReviewText = newReview;
            rating.RateDate = rateDate; // Update the RateDate
            db.SaveChanges();
            Console.WriteLine("Rating updated successfully.");
        }
    }

    public void DeleteRating(String titleID, int userID)
    {
        var rating = db.RatingsHistory.FirstOrDefault(r => r.TitleID == titleID && r.UserID == userID);
        if (rating != null)
        {
            db.RatingsHistory.Remove(rating);
            db.SaveChanges();
        }
    }
}
