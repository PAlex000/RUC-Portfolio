using DataLayer.Database;
using DataLayer.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;
using WebServer.Models;

namespace WebServer.Controllers;

[Route("api/bookmark")]
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
    [HttpGet]
    public IActionResult GetBookmark()
    {
        IEnumerable<BookmarkModel> result = _dataService
            .GetBookmarks()
            .Select(CreateBookmarkModel);
        return !result.Any() ? NotFound() : Ok(result);
    }

    //Get bookmark by userid
    [HttpGet("{userId}")]
    public IActionResult GetBookmark(int userId)
    {
        IEnumerable<BookmarkModel> result = _dataService
            .GetBookmarksByUserId(userId)
            .Select(CreateBookmarkModel);
        return !result.Any() ? NotFound() : Ok(result);
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

         _dataService.CreateBookmark(bookmark);
        return Ok(bookmark);
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


