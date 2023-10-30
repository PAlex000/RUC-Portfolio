using backend.Models;
using System.Collections.Generic;

namespace backend
{
    public interface IMovieService
    {
        List<TitleBasics> SearchMovies(int userId, string searchString);
        List<TitleBasics> GetSimilarMovies(string movieId);
        bool CreateMovie(TitleBasics newMovie, TitleAkas newTitleAkas);
        bool DeleteMovie(string movieId);
        void UpdateMovie(string movieId, TitleBasics updatedMovie, TitleAkas updatedTitleAkas);
    }
}