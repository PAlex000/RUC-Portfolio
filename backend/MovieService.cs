using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend
{
    public class MovieService
    {
        public List<TitleBasics> SearchMovies(int userId, string searchString)
        {
            var db = new MovieContext();
            var search = db.TitleBasics.Include(tb => tb.Akas)
                .Where(tb => tb.description.Contains(searchString) || tb.Akas.Any(aka => aka.title.Contains(searchString))).ToList();
            return search;
        }

        public List<TitleBasics> GetSimilarMovies(string movieId)
        {
            var db = new MovieContext();
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

    }
}

