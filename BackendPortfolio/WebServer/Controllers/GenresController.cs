using DataLayer.Database;
using DataLayer.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;
using WebServer.Models;

namespace WebServer.Controllers;

[Route("api/genre")]
[ApiController]
public class GenresController : BaseController
{
    private readonly IGenreService _dataService;

    public GenresController(IGenreService dataService, LinkGenerator linkGenerator)
        : base(linkGenerator)
    {
        _dataService = dataService;
    }

    //Get genre list
    [HttpGet(Name = nameof(GetGenre))]
    public IActionResult GetGenre(int page = 0, int pageSize = 10)
    {
        (var genres, var total) = _dataService.GetGenre(page, pageSize);
        var genre = genres.Select(CreateGenreModel);
        var result = Paging(genre, total, page, pageSize, nameof(GetGenre));
        return Ok(result);
    }


    //Get genre by id
    [HttpGet("{Id}", Name = nameof(GetGenreById))]
    public IActionResult GetGenreById(int Id)
    {
        var genre = _dataService.GetGenreById(Id);
        if (genre == null)
            return NotFound();

        return Ok(CreateGenreModel(genre));
    }

    //Get genre by name
    [HttpGet("name/{name}", Name = nameof(GetGenreByName))]
    public IActionResult GetGenreByName(string name)
    {
        var genre = _dataService.GetGenreByName(name);
        if (genre == null)
            return NotFound();

        return Ok(CreateGenreModel(genre));
    }

    //Create genre
    [HttpPost]
    public IActionResult CreateGenre(CreateGenreModel model)
    {
        var genre = new Genre
        {
            name = model.name,
        };
        Genre newGenre = _dataService.CreateGenre(genre.name);
        return Created(GetUrl(nameof(GetGenreByName), new { newGenre.Id }), newGenre);
    }

    //Update genre
    [HttpPut("{Id}")]
    public IActionResult UpdateGenre(int id, Genre newGenre)
    {
        bool result = _dataService.UpdateGenre(id, newGenre.name);
        return result ? Ok() : NotFound();
    }

    //Delete genre
    [HttpDelete("{Id}")]
    public IActionResult DeleteGenre(int Id)
    {
        bool result = _dataService.DeleteGenre(Id);
        return result ? Ok() : NotFound();
    }

    private GenreModel CreateGenreModel(Genre genre)
    {
        return new GenreModel
        {
            //Url = $"http://localhost:5001/api//{category.Id}",
            url = GetUrl(nameof(GetGenreById), new { genre.Id }),
            name = genre.name,
        };
    }

}
