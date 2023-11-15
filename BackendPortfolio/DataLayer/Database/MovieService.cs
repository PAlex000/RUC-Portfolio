using DataLayer.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace DataLayer.Database;

public class MovieService : IMovieService
{
    private readonly MovieContext db = new MovieContext();
    public List<TitleBasics> SearchMovies(string searchString)
    {
        var search = db.TitleBasics.Include(tb => tb.Akas)
            .Where(tb => tb.description.Contains(searchString) || tb.Akas.Any(aka => aka.title.Contains(searchString))).ToList();
        return search;
    }

    public List<TitleBasics> GetSimilarMovies(string movieId)
    {
        var targetMovie = db.TitleBasics.FirstOrDefault(x => x.ID == movieId);
        if (targetMovie == null) return new List<TitleBasics>();

        var similarMovies = db.TitleBasics
            .Where(x => x.ID != movieId)
            .Where(x => x.type == targetMovie.type)
            .Where(x => x.isAdult == targetMovie.isAdult)
            .Where(x => x.startYear == targetMovie.startYear)
            .Take(8)
            .ToList();

        return similarMovies;
    }

    public bool CreateMovie(TitleBasics newMovie, TitleAkas newTitleAkas)
    {
        newTitleAkas.Basics = newMovie;
        newMovie.Akas = new List<TitleAkas> { newTitleAkas };

        db.TitleBasics.Add(newMovie);
        db.SaveChanges();
        return true;
    }

    public bool DeleteMovie(string movieId)
    {
        var movieToDelete = db.TitleBasics.Include(tb => tb.Akas)
                            .FirstOrDefault(m => m.ID == movieId);

        if (movieToDelete != null)
        {
            db.TitleAkas.RemoveRange(movieToDelete.Akas);
            db.TitleBasics.Remove(movieToDelete);
            db.SaveChanges();
        }

        return movieToDelete != null;
    }

    public void UpdateMovie(string movieId, TitleBasics updatedMovie, List<TitleAkas> updatedAkasList)
    {
        var existingMovie = db.TitleBasics.Include(tb => tb.Akas)
                                .FirstOrDefault(m => m.ID == movieId);
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
                var existingAkas = existingMovie.Akas.FirstOrDefault(aka => aka.ID == updatedAkas.ID);
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
                    updatedAkas.Basics = existingMovie;
                    existingMovie.Akas.Add(updatedAkas);
                }
            }

            existingMovie.Akas.RemoveAll(aka => !updatedAkasList.Any(uaka => uaka.ID == aka.ID));

            db.SaveChanges();
        }
    }
}
