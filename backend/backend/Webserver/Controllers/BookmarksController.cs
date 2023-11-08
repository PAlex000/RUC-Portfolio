using backend;
using backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;
using WebServer.Models;

namespace WebServer.Controllers;

[Route("api/genre")]
[ApiController]
public class BookmarksController : ControllerBase
{
    private readonly IBookmarkService _dataService;
    private readonly LinkGenerator _linkGenerator;

    public BookmarksController(IBookmarkService dataService, LinkGenerator linkGenerator)
    {
        _dataService = dataService;
        _linkGenerator = linkGenerator;
    }


    //Get bookamrk by id
    [HttpGet("{id}", Name = nameof(GetBookmark))]
    public IActionResult GetBookmark(int id)
    {
        var bookmark = _dataService.GetBookmarkById(id);
        if (bookmark == null)
        {
            return NotFound();
        }

        return Ok(CreateBookmarkModel(bookmark));
    }

    //Create bookmark
    [HttpPost]
    public IActionResult CreateBookmark(CreateBookmarkModel model)
    {
        var bookmark = new Bookmark
        {
            titleID = model.titleID,
            userID = model.userID,
            status = model.status
        };
        Bookmark newBookmark = _dataService.CreateBookmark(
            bookmark.titleID,
            bookmark.userID,
            );
        return Created(GetUrl(nameof(GetBookmark), new { newBookmark.ID }), newBookmark);
    }


    //Delete bookamrk
    [HttpDelete("{id}")]
    public IActionResult DeleteBookmark(int id)
    {
        bool result = _dataService.DeleteBookmark(id);
        return result ? Ok() : NotFound();
    }



    private BookmarkModel CreateBookmarkModel(Bookmark bookmark)
    {
        return new BookmarkModel
        {
            //Url = $"http://localhost:5001/api//{bookmark.Id}",
            Url = GetUrl(nameof(GetBookmark), new { bookmark.ID }),
            titleID = bookmark.titleID,
            userID = bookmark.userID,
            status = bookmark.status,


        };
    }


    private string? GetUrl(string name, object values)
    {
        return _linkGenerator.GetUriByName(HttpContext, name, values);
    }

}


