﻿using backend;
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

    public IList<Rating> GetRatingHistory()
    {
        var ratings = _context.RatingsHistory.ToList();
        return ratings;
    }

    public IList<Rating> GetRatingistoryByUserId(int _userID)
    {
        return _context.RatingsHistory
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
            Console.WriteLine("Rating updated successfully.");
        }
    }

    public void DeleteRating(String titleID, int userID)
    {
        var rating = _context.RatingsHistory.FirstOrDefault(r => r.TitleID == titleID && r.UserID == userID);
        if (rating != null)
        {
            _context.RatingsHistory.Remove(rating);
            _context.SaveChanges();
        }
    }
}