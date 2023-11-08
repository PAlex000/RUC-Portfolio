using DataLayer.Database;
using DataLayer.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;
using WebServer.Models;

namespace WebServer.Controllers;

[Route("api/genre")]
[ApiController]
public class GenresController : ControllerBase
{
    private readonly IGenreService _dataService;
    private readonly LinkGenerator _linkGenerator;

    public GenresController(IGenreService dataService, LinkGenerator linkGenerator)
    {
        _dataService = dataService;
        _linkGenerator = linkGenerator;
    }


    //Get genre by id
    [HttpGet("{id}", Name = nameof(GetGenre))]
    public IActionResult GetGenre(int id)
    {
        var genre = _dataService.GetGenre(id);
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
        return Created(GetUrl(nameof(GetGenre), new { newGenre.Id }), newGenre);
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
            Url = GetUrl(nameof(GetGenre), new { genre.Id }),
            Name = genre.Name,
        };
    }


    private string? GetUrl(string name, object values)
    {
        return _linkGenerator.GetUriByName(HttpContext, name, values);
    }

}
