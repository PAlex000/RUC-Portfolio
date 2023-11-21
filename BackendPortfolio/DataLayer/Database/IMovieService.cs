using DataLayer.Models;
using System.Collections.Generic;

namespace DataLayer.Database;

public interface IMovieService
{
    public List<TitleBasics> GetMovie();
    public TitleBasics GetMovieById(string movieId);
    public List<TitleBasics> SearchMovies(string searchString);
    public List<TitleBasics> GetSimilarMovies(string movieId);
    public bool CreateMovie(TitleBasics newMovie, TitleAkas newTitleAkas);
    bool DoesMovieExist(string movieId);
    public bool DeleteMovie(string movieId);
    public void UpdateMovie(string movieId, TitleBasics updatedMovie, List<TitleAkas> updatedAkasList);
}
