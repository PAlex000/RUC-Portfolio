using DataLayer.Models;
using System.Collections.Generic;

namespace DataLayer.Database;

public interface IMovieService
{
    public List<TitleBasics> SearchMovies(int userId, string searchString);
    public List<TitleBasics> GetSimilarMovies(string movieId);
    public bool CreateMovie(TitleBasics newMovie, TitleAkas newTitleAkas);
    public bool DeleteMovie(string movieId);
    public void UpdateMovie(string movieId, TitleBasics updatedMovie, List<TitleAkas> updatedAkasList);
}
