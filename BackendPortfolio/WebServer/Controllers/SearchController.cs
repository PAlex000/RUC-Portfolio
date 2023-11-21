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

    // Get search history
    [HttpGet]
    public ActionResult<IList<Search>> GetSearchHistory()
    {
        IEnumerable<SearchModel> searchHistory = _searchService
            .GetSearchHistory()
            .Select(CreateSearchModel);
        return !searchHistory.Any() ? NotFound() : Ok(searchHistory);
    }

    // Get search by user ID
    [HttpGet("user/{userId}")]
    public ActionResult<IList<Search>> GetSearchHistoryByUserId(int userId)
    {
        var searchHistory = _searchService
            .GetSearchHistoryByUserId(userId)
            .Select(CreateSearchModel);
        return !searchHistory.Any() ? NotFound() : Ok(searchHistory);
    }

    // Create a search
    [HttpPost]
    public ActionResult<Search> CreateSearch(CreateSearchModel model)
    {
        var newSearch = _searchService.CreateSearch(model.UserID, model.SearchString);
        if (newSearch == null)
        {
            return BadRequest("Could not create the search entry.");
        }
        return CreatedAtAction(nameof(GetSearchHistoryByUserId), new { userId = newSearch.userID }, newSearch);
    }

    // Delete a search
    [HttpDelete]
    public IActionResult DeleteSearch(CreateSearchModel model)
    {
        bool result = _searchService.DeleteSearch(model.SearchString, model.UserID);
        return result ? Ok() : NotFound();
    }
    private SearchModel CreateSearchModel(Search search)
    {
        return new SearchModel
        {
            Url = $"http://localhost:5001/api/search/user/{search.userID}",
            //Url = GetUrl(nameof(GetBookmark), new { bookmark.ID }),
            UserID = search.userID,
            SearchString = search.searchString,
            SearchDate = search.searchDate
        };
    }
}
