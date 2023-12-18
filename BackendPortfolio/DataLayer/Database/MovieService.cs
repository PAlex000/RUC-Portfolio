using DataLayer.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace DataLayer.Database;

public class MovieService : IMovieService
{
    private readonly MovieContext db = new MovieContext();
    public (IList<TitleBasics> movie, int count) GetMovie(int page, int pageSize)
    {
        var movie = db.TitleBasics
            .Skip(page * pageSize)
            .Take(pageSize)
            .ToList();
        foreach (var mv in movie)
        {
            if (mv == null)
                mv.akas = null;
            else
                mv.akas = db.TitleAkas.Where(x => x.Id == mv.Id).ToList();
        }
        return (movie, db.TitleBasics.Count());
    }
    public TitleBasics GetMovieById(string movieId)
    {
        var movie = db.TitleBasics.FirstOrDefault(x => x.Id == movieId);
        movie.akas = db.TitleAkas.Where(x => x.Id == movie.Id).ToList();
        return movie;
    }
    public List<TitleBasics> SearchMovies(string searchString)
    {
        var search = db.TitleBasics.Include(tb => tb.akas)
            .Where(tb => tb.description.Contains(searchString) ||tb.akas.Any(aka => aka.title.Contains(searchString)))
            .ToList();
        foreach (var mv in search)
        {
            if (mv == null)
                mv.akas = null;
            else
                mv.akas = db.TitleAkas.Where(x => x.Id == mv.Id).ToList();
        }
        return search;
    }

    public List<TitleBasics> GetSimilarMovies(string movieId)
    {
        var targetMovie = db.TitleBasics.FirstOrDefault(x => x.Id == movieId);
        if (targetMovie == null)
            return new List<TitleBasics>();

        var similarMovies = db.TitleBasics
            .Where(x => x.Id != movieId)
            //.Where(x => x.type == targetMovie.type)
            .Where(x => x.isAdult == targetMovie.isAdult)
            .Where(x => x.startYear == targetMovie.startYear)
            .Take(8)
            .ToList();
        foreach (var mv in similarMovies)
        {
            if (mv == null)
                mv.akas = null;
            else
                mv.akas = db.TitleAkas.Where(x => x.Id == mv.Id).ToList();
        }
        return similarMovies;
    }

    public bool DoesMovieExist(string movieId)
    {
        return db.TitleBasics.Any(m => m.Id == movieId);
    }

        public (IList<TitleBasics> movies, int count) GetMoviesByRating(int page, int pageSize, int? minRating, int? maxRating)
    {
        var moviesQuery = db.TitleBasics.AsQueryable();

        if (minRating.HasValue)
        {
            moviesQuery = moviesQuery.Where(movie => movie.rating >= minRating);
        }

            if (maxRating.HasValue)
        {
            moviesQuery = moviesQuery.Where(movie => movie.rating <= maxRating);
        }

        var moviesWithRatings = moviesQuery
            .Skip(page * pageSize)
            .Take(pageSize)
            .ToList();

        var count = moviesQuery.Count();

        foreach (var movie in moviesWithRatings)
        {
            movie.akas = db.TitleAkas.Where(x => x.Id == movie.Id).ToList();
        }

        return (moviesWithRatings, count);
    }

    public bool CreateMovie(TitleBasics newMovie, TitleAkas newTitleAkas)
    {
        var existingMovie = db.TitleBasics.Find(newMovie.Id);
        if (existingMovie != null)
            return false;

        newTitleAkas.basics = newMovie;
        newMovie.akas = new List<TitleAkas> { newTitleAkas };

        db.TitleBasics.Add(newMovie);
        db.SaveChanges();
        return true;
    }

    public bool DeleteMovie(string movieId)
    {
        var movieToDelete = db.TitleBasics.Include(tb => tb.akas)
                                .FirstOrDefault(m => m.Id == movieId);

        if (movieToDelete != null)
        {
            var associatedPeople = db.PersonAssociation
                                      .Where(pa => pa.titleId == movieId)
                                      .ToList();
            if (associatedPeople.Any())
            {
                db.PersonAssociation.RemoveRange(associatedPeople);
            }

            db.TitleAkas.RemoveRange(movieToDelete.akas);
            db.TitleBasics.Remove(movieToDelete);
            db.SaveChanges();
            return true;
        }
        return false;
    }

    public void UpdateMovie(string movieId, TitleBasics updatedMovie, List<TitleAkas> updatedAkasList)
    {
        var existingMovie = db.TitleBasics.Include(tb => tb.akas)
                                .FirstOrDefault(m => m.Id == movieId);
        if (existingMovie != null)
        {
            existingMovie.type = updatedMovie.type;
            existingMovie.isAdult = updatedMovie.isAdult;
            existingMovie.startYear = updatedMovie.startYear;
            existingMovie.endYear = updatedMovie.endYear;
            existingMovie.poster = updatedMovie.poster;
            existingMovie.description = updatedMovie.description;
            existingMovie.rating = updatedMovie.rating;

            foreach (var updatedAkas in updatedAkasList)
            {
                var existingAkas = existingMovie.akas.FirstOrDefault(aka => aka.Id == updatedAkas.Id);
                if (existingAkas != null)
                {
                    existingAkas.ordering = updatedAkas.ordering;
                    existingAkas.title = updatedAkas.title;
                    existingAkas.region = updatedAkas.region;
                    existingAkas.attribute = updatedAkas.attribute;
                    existingAkas.type = updatedAkas.type;
                    existingAkas.language = updatedAkas.language;
                    existingAkas.isOriginalTitle = updatedAkas.isOriginalTitle;
                }
                else
                {
                    updatedAkas.basics = existingMovie;
                    existingMovie.akas.Add(updatedAkas);
                }
            }

            existingMovie.akas.RemoveAll(aka => !updatedAkasList.Any(uaka => uaka.Id == aka.Id));
            db.SaveChanges();
        }
    }
}
