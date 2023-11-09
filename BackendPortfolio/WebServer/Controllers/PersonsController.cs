using Microsoft.AspNetCore.Mvc;
using DataLayer.Models;
using DataLayer.Database;
using Microsoft.AspNetCore.Routing;
using WebServer.Models;

namespace WebServer.Controllers;
[Route("api/person")]
[ApiController]

public class PersonsController : ControllerBase
{
    private readonly IPersonService _personService;
    private readonly LinkGenerator _linkGenerator;

    public PersonsController(IPersonService personService, LinkGenerator linkGenerator)
    {
        _personService = personService;
        _linkGenerator = linkGenerator;
    }

    protected object Paging<T>(IEnumerable<T> actor, int total, int page, int pageSize, string endpointName)
    {

        var numPages = (int)Math.Ceiling(total / (double)pageSize);
        var next = page < numPages - 1
            ? GetUrl(endpointName, new { page = page + 1, pageSize })
        : null;
        var prev = page > 0
            ? GetUrl(endpointName, new { page = page - 1, pageSize })
        : null;

        var cur = GetUrl(endpointName, new { page, pageSize });

        return new
        {
            Total = total,
            NumberOfPages = numPages,
            Next = next,
            Prev = prev,
            Current = cur,
            Actor = actor
        };
    }

    [HttpGet(Name = nameof(GetPersons))]
    public IActionResult GetPersons(int page = 0, int pageSize = 10)
    {
        (var persons, var total) = _personService.GetPersons(page, pageSize);
        var actor = persons.Select(CreatePersonModel);
        var result = Paging(actor, total, page, pageSize, nameof(GetPersons));
        return Ok(result);
    }


    [HttpGet("{personId}", Name = nameof(GetPersonById))]

    public IActionResult GetPersonById(string personId)
    {
        var person = _personService.GetPersonById(personId);
        if (person == null)
        {
            return NotFound();
        }

        return Ok(CreatePersonModel(person));
    }

    [HttpGet("actor/{primaryName}", Name = nameof(GetPersonByName))]

    public IActionResult GetPersonByName(string primaryName)
    {
        var personName = _personService.GetPersonByName(primaryName);
        if (personName == null)
        {
            return NotFound();
        }

        return Ok(CreatePersonModel(personName));
    }

    [HttpPost]
    public IActionResult CreatePerson([FromForm] CreatePersonModel model)
    {
        var person = new Person
        {
            Id = model.Id,
            PrimaryName = model.PrimaryName,
            DateOfBirth = model.DateOfBirth,
            DateOfDeath = model.DateOfDeath
        };

        var result = _personService.CreatePerson(person);
        if (result)
        {
            return Created(GetUrl(nameof(GetPersons), new { personId = person.Id }), person);
        }

        return BadRequest("Could not create the actor");
    }

    [HttpPut("{personId}")]

    public IActionResult UpdatePerson(string personId, [FromForm] UpdatePersonModel model)
    {
        var updatePerson = new Person
        {
            Id = model.Id,
            PrimaryName = model.PrimaryName,
            DateOfBirth = model.DateOfBirth,
            DateOfDeath = model.DateOfDeath
        };

        _personService.UpdatePerson(personId, updatePerson);
        return NoContent();
    }



    [HttpDelete("{personId}")]
    public IActionResult DeletePerson(string personId)
    {
        var result = _personService.DeletePerson(personId);
        return result ? Ok() : NotFound("The actor could not be found");
    }

    private PersonModel CreatePersonModel(Person person)
    {
        return new PersonModel
        {
            Url = GetUrl(nameof(GetPersons), new { personId = person.Id }),
            PrimaryName = person.PrimaryName,
            DateOfBirth = person.DateOfBirth,
            DateOfDeath = person.DateOfDeath
        };
    }

    private string? GetUrl(string name, object values)
    {
        return _linkGenerator.GetUriByName(HttpContext, name, values);
    }
}
