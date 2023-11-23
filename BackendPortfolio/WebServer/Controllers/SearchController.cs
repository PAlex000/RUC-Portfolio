using DataLayer.Database;
using DataLayer.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using WebServer.Models;

namespace WebServer.Controllers;

[Route("api/search")]
[ApiController]
public class SearchController : ControllerBase
{
    private readonly ISearchService _searchService;

    public SearchController(ISearchService searchService)
    {
        _searchService = searchService;
    }

    [HttpGet]
    public ActionResult<IList<Search>> GetSearchHistory()
    {
        IEnumerable<SearchModel> searchHistory = _searchService
            .GetSearchHistory()
            .Select(CreateSearchModel);
        return !searchHistory.Any() ? NotFound() : Ok(searchHistory);
    }

    [HttpGet("user/{userId}")]
    public ActionResult<IList<Search>> GetSearchHistoryByUserId(int userId)
    {
        var searchHistory = _searchService
            .GetSearchHistoryByUserId(userId)
            .Select(CreateSearchModel);
        return !searchHistory.Any() ? NotFound() : Ok(searchHistory);
    }

    [HttpPost]
    public ActionResult<Search> CreateSearch(CreateSearchModel model)
    {
        var newSearch = _searchService.CreateSearch(model.userId, model.searchString);
        if (!newSearch)
            return BadRequest("Could not create the search entry.");
        return Ok();
        //return CreatedAtAction(nameof(GetSearchHistoryByUserId), new { userId = search.userId }, newSearch);
    }

    [HttpDelete]
    public IActionResult DeleteSearch(CreateSearchModel model)
    {
        bool result = _searchService.DeleteSearch(model.searchString, model.userId);
        return result ? Ok() : NotFound();
    }
    private SearchModel CreateSearchModel(Search search)
    {
        return new SearchModel
        {
            url = $"http://localhost:5001/api/search/user/{search.userId}",
            //Url = GetUrl(nameof(GetBookmark), new { bookmark.ID }),
            userId = search.userId,
            searchString = search.searchString,
            searchDate = search.searchDate
        };
    }
}
