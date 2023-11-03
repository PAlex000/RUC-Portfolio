using backend.Models;

namespace backend
{
	public interface IGenreService
	{

            IList<Genres> GetGenre();
            Genres? GetGenre(int id);
            Genres? CreateGenre(string name);
            bool DeleteGenre(Genres genre);
            bool DeleteGenre(int id);
            bool UpdateGenre(int id, string name);
	}
}
