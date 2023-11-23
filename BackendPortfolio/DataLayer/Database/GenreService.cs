using DataLayer.Models;

namespace DataLayer.Database;
public class GenreService : IGenreService
{
    private readonly MovieContext db = new MovieContext();

    public (IList<Genre> genre, int count) GetGenre(int page, int pageSize)
    {
        var genre = db.Genres
            .Skip(page * pageSize)
            .Take(pageSize)
            .ToList();
        return (genre, db.Genres.Count());
    }

    public Genre? GetGenreById(int genreId)
    {
        return db.Genres.FirstOrDefault(x => x.Id == genreId);
    }

    public Genre? GetGenreByName(string genreName)
    {
        return db.Genres.FirstOrDefault(x => x.name == genreName);
    }

    public Genre? CreateGenre(string genreName)
    {
        var genreId = db.Genres.Max(x => x.Id) + 1;
        var genre = new Genre
        {
            Id = genreId,
            name = genreName,
        };
        db.Add(genre);
        db.SaveChanges();
        return genre;
    }

    public bool DeleteGenre(Genre genre)
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

    public bool UpdateGenre(int genreId, string genreName)
    {
        var genre = GetGenreById(genreId);
        if (genre != null)
        {
            genre.name = genreName;
            db.Update(genre);
            return db.SaveChanges() > 0;
        }
        return false;
    }
}
