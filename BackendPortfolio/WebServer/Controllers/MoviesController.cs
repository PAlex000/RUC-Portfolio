using DataLayer.Database;
using DataLayer.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;
using WebServer.Models;

namespace WebServer.Controllers;

[Route("api/movies")]
[ApiController]
public class MoviesController : ControllerBase
{
    private readonly IMovieService _movieService;

    public MoviesController(IMovieService movieService)
    {
        _movieService = movieService;
    }

    // Search movies
    [HttpGet("search")]
    public ActionResult<List<TitleBasics>> SearchMovies(int userId, string searchString)
    {
        var movies = _movieService.SearchMovies(userId, searchString);
        if (movies == null || !movies.Any())
        {
            return NotFound("No movies found.");
        }
        return Ok(movies);
    }

    // Get similar movies
    [HttpGet("{movieId}/similar")]
    public ActionResult<List<TitleBasics>> GetSimilarMovies(string movieId)
    {
        var similarMovies = _movieService.GetSimilarMovies(movieId);
        if (similarMovies == null || !similarMovies.Any())
        {
            return NotFound("No similar movies found.");
        }
        return Ok(similarMovies);
    }

    // Create movie
    [HttpPost]
    public IActionResult CreateMovie([FromBody] MovieCreationModel model)
    {
        var newMovie = new TitleBasics
        {
            ID = model.ID,
            type = model.Type,
            isAdult = model.IsAdult,
            startYear = model.StartYear,
            endYear = model.EndYear,
            poster = model.Poster,
            description = model.Description,
            rating = model.Rating,
            Akas = model.Akas.Select(aka => new TitleAkas
            {
                ordering = aka.Ordering,
                title = aka.Title,
                region = aka.Region,
                attribute = aka.Attribute,
                type = aka.Type,
                language = aka.Language,
                isOriginalTitle = aka.IsOriginalTitle
            }).ToList()
        };

        var result = _movieService.CreateMovie(newMovie, newMovie.Akas.FirstOrDefault());
        if (result)
        {
            return CreatedAtAction(nameof(GetSimilarMovies), new { movieId = newMovie.ID }, newMovie);
        }
        return BadRequest("Could not create the movie.");
    }

    // Delete movie
    [HttpDelete("{movieId}")]
    public IActionResult DeleteMovie(string movieId)
    {
        var result = _movieService.DeleteMovie(movieId);
        if (result)
        {
            return Ok();
        }
        return NotFound("Movie not found.");
    }

    // Update movie
    [HttpPut("{movieId}")]
    public IActionResult UpdateMovie(string movieId, [FromBody] MovieUpdateModel model)
    {
        var updatedMovie = new TitleBasics
        {
            ID = movieId,
            type = model.Type,
            isAdult = model.IsAdult,
            startYear = model.StartYear,
            endYear = model.EndYear,
            poster = model.Poster,
            description = model.Description,
            rating = model.Rating,
            Akas = model.Akas.Select(aka => new TitleAkas
            {
                ID = aka.ID,
                ordering = aka.Ordering,
                title = aka.Title,
                region = aka.Region,
                attribute = aka.Attribute,
                type = aka.Type,
                language = aka.Language,
                isOriginalTitle = aka.IsOriginalTitle
            }).ToList()
        };

        _movieService.UpdateMovie(movieId, updatedMovie, updatedMovie.Akas);
        return NoContent();
    }
}

public class MovieCreationModel
{
    public string ID { get; set; }
    public string Type { get; set; }
    public bool IsAdult { get; set; }
    public string StartYear { get; set; }
    public string EndYear { get; set; }
    public string Poster { get; set; }
    public string Description { get; set; }
    public int? Rating { get; set; }
    public List<AkasCreationModel> Akas { get; set; }
}

public class AkasCreationModel
{
    public int Ordering { get; set; }
    public string Title { get; set; }
    public string Region { get; set; }
    public string Attribute { get; set; }
    public string Type { get; set; }
    public string Language { get; set; }
    public bool IsOriginalTitle { get; set; }
}

public class MovieUpdateModel
{
    public string Type { get; set; }
    public bool IsAdult { get; set; }
    public string StartYear { get; set; }
    public string EndYear { get; set; }
    public string Poster { get; set; }
    public string Description { get; set; }
    public int? Rating { get; set; }
    public List<AkasUpdateModel> Akas { get; set; }
}

public class AkasUpdateModel
{
    public string? ID { get; set; }
    public int Ordering { get; set; }
    public string Title { get; set; }
    public string Region { get; set; }
    public string Attribute { get; set; }
    public string Type { get; set; }
    public string Language { get; set; }
    public bool IsOriginalTitle { get; set; }
}