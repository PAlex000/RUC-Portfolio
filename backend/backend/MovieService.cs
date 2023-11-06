using backend.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace backend
{
    public class MovieService : IMovieService
    {
        private readonly MovieContext db = new MovieContext();
        public List<TitleBasics> SearchMovies(int userId, string searchString)
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

        public void UpdateMovie(string movieId, TitleBasics updatedMovie, TitleAkas updatedTitleAkas)
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

                if (existingMovie.Akas.Any())
                {
                    var existingAkas = existingMovie.Akas.First();
                    existingAkas.title = updatedTitleAkas.title;
                }

                db.SaveChanges();
            }
        }
    }
}
