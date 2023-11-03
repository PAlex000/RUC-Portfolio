using backend;
using backend.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;

class RatingService
{
    private readonly MovieContext _context = new MovieContext();

    public RatingService(MovieContext context)
    {
        _context = context;
    }

    public IList<Rating> GetRatingHistory(int _userID)
    {
        var ratings = _context.RatingsHistory.ToList();

        foreach (var rating in ratings)
        {
            rating.RateDate = DateTime.UtcNow.ToShortDateString();
        }

        return ratings;
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

        _context.Add(rating);
        _context.SaveChanges();
        Console.WriteLine("Rating created successfully.");
        return rating;
    }

    public List<Rating> ReadRatingsForMovie(String titleID)
    {
        return _context.RatingsHistory.Where(r => r.TitleID == titleID).ToList();
    }

    public void UpdateRating(String titleID, int userID, int newRatingValue, string newReview, String rateDate)
    {
        var rating = _context.RatingsHistory.FirstOrDefault(r => r.TitleID == titleID && r.UserID == userID);
        if (rating != null)
        {
            rating.Grade = newRatingValue;
            rating.ReviewText = newReview;
            rating.RateDate = rateDate; // Update the RateDate
            _context.SaveChanges();
            UpdateAverageRating(titleID);
        }
    }

    public void DeleteRating(String titleID, int userID)
    {
        var rating = _context.RatingsHistory.FirstOrDefault(r => r.TitleID == titleID && r.UserID == userID);
        if (rating != null)
        {
            _context.RatingsHistory.Remove(rating);
            _context.SaveChanges();
            UpdateAverageRating(titleID);
        }
    }

    private void UpdateAverageRating(String titleID)
    {
        var ratings = _context.RatingsHistory.Where(r => r.TitleID == titleID).ToList();
        var movie = _context.RatingsHistory.Find(titleID);

        if (ratings.Count > 0)
        {
            movie.Grade = (double)ratings.Average(r => r.Grade);
        }
        else
        {
            movie.AverageRating = 0;
        }

        _context.SaveChanges();
    }
}
