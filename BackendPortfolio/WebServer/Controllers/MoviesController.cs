using DataLayer.Database;
using DataLayer.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;
using WebServer.Models;

namespace WebServer.Controllers;

[Route("api/movie")]
[ApiController]
public class MoviesController : BaseController
{
    private readonly IMovieService _movieService;

    public MoviesController(IMovieService movieService, LinkGenerator linkGenerator) : base(linkGenerator)
    {
        _movieService = movieService;
    }
    [HttpGet(Name = nameof(GetMovie))]
    public IActionResult GetMovie(int page = 0, int pageSize = 10)
    {
        (var movies, var total) = _movieService.GetMovie(page, pageSize);
        var genre = movies.Select(CreateMovieModel);
        var result = Paging(genre, total, page, pageSize, nameof(GetMovie));
        return Ok(result);
    }   
    [HttpGet("{Id}", Name = nameof(GetMovieById))]
    public IActionResult GetMovieById(string Id)
    {
        var movie = _movieService.GetMovieById(Id);
        if (movie == null)
            return NotFound();

        return Ok(CreateMovieModel(movie));
    }
    // Search movies
    [HttpGet("search/{searchString}")]
    public ActionResult<List<TitleBasics>> SearchMovies(string searchString)
    {
        var movies = _movieService.SearchMovies(searchString);
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
        if (model == null || string.IsNullOrEmpty(model.Id))
        {
            return BadRequest("Invalid movie data.");
        }

        // does movie with the same id exist? 
        if (_movieService.DoesMovieExist(model.Id))
        {
            return BadRequest($"A movie with ID {model.Id} already exists.");
        }

        var newMovie = new TitleBasics
        {
            Id = model.Id,
            type = model.type,
            isAdult = model.isAdult,
            startYear = model.startYear,
            endYear = model.endYear,
            poster = model.poster,
            description = model.description,
            rating = model.rating,
            akas = model.akas.Select(aka => new TitleAkas
            {
                ordering = aka.ordering,
                title = aka.title,
                region = aka.region,
                attribute = aka.attribute,
                type = aka.type,
                language = aka.language,
                isOriginalTitle = aka.isOriginalTitle
            }).ToList()
        };

        try
        {
            var result = _movieService.CreateMovie(newMovie, newMovie.akas.FirstOrDefault());
            if (result)
            {
                return CreatedAtAction(nameof(GetSimilarMovies), new { movieId = newMovie.Id }, newMovie);
            }
            else
            {
                return BadRequest("Could not create the movie.");
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine(ex.Message);
            return StatusCode(500);
        }
    }

    // Delete movie
    [HttpDelete("{movieId}")]
    public IActionResult DeleteMovie(string movieId)
    {
        var result = _movieService.DeleteMovie(movieId);
        if (result)
        {
            return Ok("Movie Deleted");
        }
        return NotFound("Movie not found.");
    }

    // Update movie
    [HttpPut("{movieId}")]
    public IActionResult UpdateMovie(string movieId, MovieUpdateModel model)
    {
        var updatedMovie = new TitleBasics
        {
            Id = movieId,
            type = model.type,
            isAdult = model.isAdult,
            startYear = model.startYear,
            endYear = model.endYear,
            poster = model.poster,
            description = model.description,
            rating = model.rating,
            akas = model.akas.Select(aka => new TitleAkas
            {
                Id = aka.Id,
                ordering = aka.ordering,
                title = aka.title,
                region = aka.region,
                attribute = aka.attribute,
                type = aka.type,
                language = aka.language,
                isOriginalTitle = aka.isOriginalTitle
            }).ToList()
        };

        _movieService.UpdateMovie(movieId, updatedMovie, updatedMovie.akas);
        return NoContent();
    }
    private MovieModel CreateMovieModel(TitleBasics movie)
    {
        return new MovieModel
        {
            url = GetUrl(nameof(GetMovieById), new { movie.Id }),
            type = movie.type,
            isAdult = movie.isAdult,
            startYear = movie.startYear,
            endYear = movie.endYear,
            poster = movie.poster,
            description = movie.description,
            rating = movie.rating
        };
    }
}
