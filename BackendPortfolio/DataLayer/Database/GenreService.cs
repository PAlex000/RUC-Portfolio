using DataLayer.Models;

namespace DataLayer.Database
{
    public class GenreService : IGenreService
	{
    private readonly MovieContext db = new MovieContext();


    public (IList<Genres> genre, int count) GetGenre(int page, int pageSize)
    {
        var genre =
            db.Genres
            .Skip(page * pageSize)
            .Take(pageSize)
            .ToList();
        return (genre, db.Genres.Count());
    }



        public Genres? GetGenreById(int genresId)
    {
        return db.Genres.FirstOrDefault(x => x.Id == genresId);
    }

    public Genres? GetGenreByName(string name)
    {
            return db.Genres.FirstOrDefault(x => x.Name == name);

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

        var genre = GetGenreById(id);
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
