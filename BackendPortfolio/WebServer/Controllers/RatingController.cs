using DataLayer.Database;
using DataLayer.Models;
using Microsoft.AspNetCore.Mvc;

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
        return Ok(ratings);
    }

    [HttpGet("{userId}")]
    public IActionResult GetRatingsByUserId(int userId)
    {
        var ratings = _ratingService.GetRatingistoryByUserId(userId);
        return Ok(ratings);
    }

    [HttpPost]
    public IActionResult CreateRating([FromBody] Rating rating)
    {
        var newRating = _ratingService.CreateRating(rating.TitleID, rating.UserID, rating.Grade, rating.ReviewText, rating.RateDate);
        return CreatedAtAction(nameof(GetRatingHistory), new { id = newRating.TitleID }, newRating);
    }

    public IActionResult UpdateRating(string titleId, int userId, [FromBody] Rating rating)
    {
        // Find the rating to update
        var existingRating = _ratingService.ReadRatingsForMovie(titleId)
                                          .FirstOrDefault(r => r.UserID == userId);

        if (existingRating == null)
        {
            return NotFound(); // Return a 404 Not Found response if the rating is not found
        }

        // Update the existing rating with the new values
        existingRating.Grade = rating.Grade;
        existingRating.ReviewText = rating.ReviewText;
        existingRating.RateDate = rating.RateDate;

        _ratingService.UpdateRating(titleId, userId, rating.Grade, rating.ReviewText, rating.RateDate);

        return Ok(existingRating); // Return the updated rating
    }


    [HttpDelete("{titleId}/{userId}")]
    public IActionResult DeleteRating(string titleId, int userId)
    {
        // Find the rating to delete
        var existingRating = _ratingService.ReadRatingsForMovie(titleId)
                                          .FirstOrDefault(r => r.UserID == userId);

        if (existingRating == null)
        {
            return NotFound(); // Return a 404 Not Found response if the rating is not found
        }

        _ratingService.DeleteRating(titleId, userId);

        return NoContent(); // Return a 204 No Content response after successful deletion
    }
}
