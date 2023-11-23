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
            titleId = model.titleId,
            userId = model.userId,
            status = model.status
        };

         _dataService.CreateBookmark(bookmark);
        return Ok(bookmark);
    }

    //Delete bookamrk
    [HttpDelete("{Id}")]
    public IActionResult DeleteBookmark(int Id)
    {
        bool result = _dataService.DeleteBookmark(Id);
        return result ? Ok() : NotFound();
    }

    private BookmarkModel CreateBookmarkModel(Bookmark bookmark)
    {
        return new BookmarkModel
        {
            //Url = $"http://localhost:5001/api//{bookmark.Id}",
            url = GetUrl(nameof(GetBookmark), new { bookmark.Id }),
            titleId = bookmark.titleId,
            userId = bookmark.userId,
            status = bookmark.status,
        };
    }

    private string? GetUrl(string name, object values)
    {
        return _linkGenerator.GetUriByName(HttpContext, name, values);
    }

}


