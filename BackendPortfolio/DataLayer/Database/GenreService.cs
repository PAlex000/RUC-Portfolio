using DataLayer.Models;

namespace DataLayer.Database
{
    public class GenreService : IGenreService
	{
    private readonly MovieContext db = new MovieContext();

    public IList<Genres> GetGenre()
    {
            return db.Genres.ToList();
    }


    public Genres? GetGenre(int genresId)
    {
        return db.Genres.FirstOrDefault(x => x.Id == genresId);
    }


    public Genres? CreateGenre(string name)
    {
        var id = db.Genres.Max(x => x.Id) + 1;
        var genre = new Genres
        {
            Id = id,
            Name = name,
        };
        db.Add(genre);
        db.SaveChanges();
        return genre;

    }


    public bool DeleteGenre(Genres genre)
    {
        return DeleteGenre(genre.Id);
    }

    public bool DeleteGenre(int genreId)
    {
        var genre = db.Genres.FirstOrDefault(x => x.Id == genreId);
        if (genre != null)
        {
            db.Genres.Remove(genre);
            return db.SaveChanges() > 0;
        }
        return false;
    }
    public bool UpdateGenre(int id, string name)
    {

        var genre = GetGenre(id);
        if (genre != null)
        {
            genre.Name = name;
            db.Update(genre);
            return db.SaveChanges() > 0;
        }
        return false;
    }

    }
}
