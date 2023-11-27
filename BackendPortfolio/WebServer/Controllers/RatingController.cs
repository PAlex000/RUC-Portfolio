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
        if (ratings == null || !ratings.Any())
        {
            return NotFound($"No ratings found on title ID: {titleId}");
        }
        return Ok(ratings);
    }

    [HttpGet("ByUserId/{userId}")]
    public IActionResult GetRatingsByUserId(int userId)
    {
        var ratings = _ratingService.GetRatingHistoryByUserId(userId);
        if (ratings == null || !ratings.Any())
        {
            return NotFound($"No ratings found on user ID: {userId}");
        }
        return Ok(ratings);
    }

    [HttpPost]
    public IActionResult CreateRating([FromBody] CreateRatingModel rating)
    {
        // Check if the rating with the same UserID and TitleID already exists
        var existingRating = _ratingService.GetRatingByUserIdAndTitleId(rating.userId, rating.titleId);
        if (existingRating != null)
        {
            return BadRequest("Rating already exists");
        }

        // Create a new rating
        var newRating = _ratingService.CreateRating(rating.titleId, rating.userId, rating.grade, rating.reviewText);
        return CreatedAtAction(nameof(GetRatingHistory), new { id = newRating.titleId }, newRating);
    }

    [HttpPut("{titleId}/{userId}")]
    public IActionResult UpdateRating(string titleId, int userId, Rating rating)
    {
        var existingRating = _ratingService.ReadRatingsForMovie(titleId)
                                          .FirstOrDefault(r => r.userId == userId);

        if (existingRating == null)
        {
            return NotFound($"Rating not found for TitleID: {titleId} and UserID: {userId}");
        }

        // Update the existing rating with the new values
        existingRating.grade = rating.grade;
        existingRating.reviewText = rating.reviewText;

        _ratingService.UpdateRating(titleId, userId, rating.grade, rating.reviewText);

        return Ok(existingRating); // Return the updated rating
    }



    [HttpDelete("{titleId}/{userId}")]
    public IActionResult DeleteRating(string titleId, int userId)
    {
        var existingRating = _ratingService.ReadRatingsForMovie(titleId)
                                          .FirstOrDefault(r => r.userId == userId);

        if (existingRating == null)
        {
            return NotFound($"Rating not found for TitleID: {titleId} and UserID: {userId}");
        }

        _ratingService.DeleteRating(titleId, userId);

        return Ok("Rating deleted");
    }
}
