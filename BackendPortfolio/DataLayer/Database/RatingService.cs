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

    public Rating GetRatingByUserIdAndTitleId(int userId, string titleId)
    {
        return db.RatingsHistory.FirstOrDefault(r => r.UserID == userId && r.TitleID == titleId);
    }

    public Rating CreateRating(string titleId, int userId, int grade, string reviewText)
    {
        // Check if the rating with the same UserID and TitleID already exists
        var existingRating = GetRatingByUserIdAndTitleId(userId, titleId);
        if (existingRating != null)
        {
            return null; // Indicate that the rating already exists
        }

        // Create a new rating
        var rating = new Rating
        {
            TitleID = titleId,
            UserID = userId,
            Grade = grade,
            ReviewText = reviewText
        };

        db.Add(rating);
        db.SaveChanges();
        Console.WriteLine("Rating created successfully.");
        return rating;
    }

    public List<Rating> ReadRatingsForMovie(String titleID)
    {
        Console.WriteLine($"Searching for ratings with titleID: {titleID}");

        var ratings = db.RatingsHistory.Where(r => r.TitleID == titleID).ToList();

        if (ratings.Count == 0)
        {
            Console.WriteLine($"No ratings found for titleID: {titleID}");
        }

        return ratings;
    }

    public void UpdateRating(String titleID, int userID, int newRatingValue, string newReview)
    {
        var rating = db.RatingsHistory.FirstOrDefault(r => r.TitleID == titleID && r.UserID == userID);
        if (rating != null)
        {
            rating.Grade = newRatingValue;
            rating.ReviewText = newReview;
            Console.WriteLine("Rating updated successfully.");
            db.SaveChanges();
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
