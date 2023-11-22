using Microsoft.AspNetCore.Mvc;
using DataLayer.Models;
using DataLayer.Database;
using backend.Webserver.Models;

namespace WebServer.Controllers;

[Route("api/ratings")]
[ApiController]
public class RatingController : ControllerBase
{
    private readonly IRatingService _ratingService;
    private readonly LinkGenerator _linkGenerator;

    public RatingController(IRatingService ratingService, LinkGenerator linkGenerator)
    {
        _ratingService = ratingService;
        _linkGenerator = linkGenerator;
    }

    [HttpGet]
    public IActionResult GetRatingHistory()
    {
        var ratings = _ratingService.GetRatingHistory();
        if (ratings == null)
        {
            return NotFound("No ratings found.");
        }
        return Ok(ratings);
    }

    [HttpGet("ByTitleId/{titleId}")]
    public IActionResult GetRatingsByTitleID(string titleId)
    {
        var ratings = _ratingService.ReadRatingsForMovie(titleId);
        if (ratings ==null)
        {
            return NotFound($"No ratings found on title ID: {titleId}");
        }
        return Ok(ratings);
    }

    [HttpGet("ByUserId/{userId}")]
    public IActionResult GetRatingsByUserId(int userId)
    {
        var ratings = _ratingService.GetRatingistoryByUserId(userId);
        if (ratings == null)
        {
            return NotFound($"No ratings found on user ID: {userId}");
        }
        return Ok(ratings);
    }

    [HttpPost]
    public IActionResult CreateRating([FromBody] CreateRatingModel rating)
    {
        // Check if the rating with the same UserID and TitleID already exists
        var existingRating = _ratingService.GetRatingByUserIdAndTitleId(rating.UserID, rating.TitleID);
        if (existingRating != null)
        {
            return BadRequest("Rating already exists");
        }

        // Create a new rating
        var newRating = _ratingService.CreateRating(rating.TitleID, rating.UserID, rating.Grade, rating.ReviewText);
        return CreatedAtAction(nameof(GetRatingHistory), new { id = newRating.TitleID }, newRating);
    }

    [HttpPut("{titleId}/{userId}")]
    public IActionResult UpdateRating(string titleId, int userId, Rating rating)
    {
        var existingRating = _ratingService.ReadRatingsForMovie(titleId)
                                          .FirstOrDefault(r => r.UserID == userId);

        if (existingRating == null)
        {
            return NotFound($"Rating not found for TitleID: {titleId} and UserID: {userId}");
        }

        // Update the existing rating with the new values
        existingRating.Grade = rating.Grade;
        existingRating.ReviewText = rating.ReviewText;

        _ratingService.UpdateRating(titleId, userId, rating.Grade, rating.ReviewText);

        return Ok(existingRating); // Return the updated rating
    }



    [HttpDelete("{titleId}/{userId}")]
    public IActionResult DeleteRating(string titleId, int userId)
    {
        var existingRating = _ratingService.ReadRatingsForMovie(titleId)
                                          .FirstOrDefault(r => r.UserID == userId);

        if (existingRating == null)
        {
            return NotFound($"Rating not found for TitleID: {titleId} and UserID: {userId}");
        }

        _ratingService.DeleteRating(titleId, userId);

        return Ok("Rating deleted");
    }
}
