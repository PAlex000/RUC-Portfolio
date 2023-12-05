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
        return (movie, db.TitleBasics.Count());
    }
    public TitleBasics GetMovieById(string movieId)
    {
        return db.TitleBasics.FirstOrDefault(x => x.Id == movieId);
    }
    public List<TitleBasics> SearchMovies(string searchString)
    {
        var search = db.TitleBasics.Include(tb => tb.akas)
            .Where(tb => tb.description.Contains(searchString) ||tb.akas.Any(aka => aka.title.Contains(searchString)))
            .ToList();
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

        return similarMovies;
    }

    public bool DoesMovieExist(string movieId)
    {
        return db.TitleBasics.Any(m => m.Id == movieId);
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
