using DataLayer.Models;

namespace DataLayer.Database;

	public interface IGenreService
	{
        (IList<Genres> genre, int count) GetGenre(int page, int pageSize);
        Genres? GetGenreById(int id);
        Genres? GetGenreByName(string name);
        Genres? CreateGenre(string name);
        bool DeleteGenre(Genres genre);
        bool DeleteGenre(int id);
        bool UpdateGenre(int id, string name);
	}
