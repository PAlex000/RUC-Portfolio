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
        (var genre, var total) = _dataService.GetGenre(page, pageSize);
        var genr = genre.Select(CreateGenreModel);
        var result = Paging(genr, total, page, pageSize, nameof(GetGenre));
        return Ok(result);
    }


    //Get genre by id
    [HttpGet("{id}", Name = nameof(GetGenreById))]
    public IActionResult GetGenreById(int id)
    {
        var genre = _dataService.GetGenreById(id);
        if (genre == null)
        {
            return NotFound();
        }

        return Ok(CreateGenreModel(genre));
    }

    //Get genre by name
    [HttpGet("name/{Name}", Name = nameof(GetGenreByName))]
    public IActionResult GetGenreByName(string name)
    {
        var genre = _dataService.GetGenreByName(name);
        if (genre == null)
        {
            return NotFound();
        }

        return Ok(CreateGenreModel(genre));
    }

    //Create genre
    [HttpPost]
    public IActionResult CreateGenre(CreateGenreModel model)
    {
        var genre = new Genres
        {
            Name = model.Name,
        };
        Genres newGenre = _dataService.CreateGenre(genre.Name);
        return Created(GetUrl(nameof(GetGenreByName), new { newGenre.Id }), newGenre);
    }

    //Update genre
    [HttpPut("{id}")]
    public IActionResult UpdateGenre(int id, Genres newGenre)
    {
        bool result = _dataService.UpdateGenre(id, newGenre.Name);
        return result ? Ok() : NotFound();
    }

    //Delete genre
    [HttpDelete("{id}")]
    public IActionResult DeleteGenre(int id)
    {
        bool result = _dataService.DeleteGenre(id);
        return result ? Ok() : NotFound();
    }



    private GenreModel CreateGenreModel(Genres genre)
    {
        return new GenreModel
        {
            //Url = $"http://localhost:5001/api//{category.Id}",
            Url = GetUrl(nameof(GetGenreById), new { genre.Id }),
            Name = genre.Name,
        };
    }

}
