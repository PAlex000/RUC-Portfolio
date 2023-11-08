using DataLayer.Database;
using DataLayer.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

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
        var searchHistory = _searchService.GetSearchHistory();
        if (searchHistory == null || searchHistory.Count == 0)
        {
            return NotFound("No search history found.");
        }
        return Ok(searchHistory);
    }

    // Get search by user ID
    [HttpGet("user/{userId}")]
    public ActionResult<IList<Search>> GetSearchHistoryByUserId(int userId)
    {
        var searchHistory = _searchService.GetSearchHistoryByUserId(userId);
        if (searchHistory == null || searchHistory.Count == 0)
        {
            return NotFound($"No search history found for user with ID: {userId}.");
        }
        return Ok(searchHistory);
    }

    // Create a search
    [HttpPost]
    public ActionResult<Search> CreateSearch([FromBody] SearchCreationModel model)
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
    public IActionResult DeleteSearch([FromBody] SearchDeleteModel model)
    {
        bool result = _searchService.DeleteSearch(model.SearchString, model.UserID);
        if (result)
        {
            return Ok();
        }
        return NotFound("Search entry not found or could not be deleted.");
    }
}

public class SearchCreationModel
{
    public int UserID { get; set; }
    public string SearchString { get; set; }
}

public class SearchDeleteModel
{
    public int UserID { get; set; }
    public string SearchString { get; set; }
}