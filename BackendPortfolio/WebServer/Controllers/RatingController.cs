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
    public IActionResult CreateRating(Rating rating)
    {
        var newRating = _ratingService.CreateRating(rating.TitleID, rating.UserID, rating.Grade, rating.ReviewText, rating.RateDate);
        return CreatedAtAction(nameof(GetRatingHistory), new { id = newRating.TitleID }, newRating);
    }

    [HttpPut("{titleId}/{userId}")]
    public IActionResult UpdateRating(string titleId, int userId, Rating rating)
    {
        _ratingService.UpdateRating(titleId, userId, rating.Grade, rating.ReviewText, rating.RateDate);

        return Ok(); // Return the updated rating
        //TODO ADD NOT FOUND, change rateDate
    }


    [HttpDelete("{titleId}/{userId}")]
    public IActionResult DeleteRating(string titleId, int userId)
    {
        _ratingService.DeleteRating(titleId, userId);

        return Ok();
    }
}
