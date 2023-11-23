using DataLayer.Models;

namespace DataLayer.Database;

	public interface IGenreService
	{
        (IList<Genre> genre, int count) GetGenre(int page, int pageSize);
        Genre? GetGenreById(int genreId);
        Genre? GetGenreByName(string genreName);
        Genre? CreateGenre(string genreName);
        bool DeleteGenre(Genre genre);
        bool DeleteGenre(int genreId);
        bool UpdateGenre(int genreId, string name);
	}
