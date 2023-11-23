using Microsoft.AspNetCore.Mvc;
using DataLayer.Models;
using DataLayer.Database;
using Microsoft.AspNetCore.Routing;
using WebServer.Models;

namespace WebServer.Controllers;
[Route("api/person")]
[ApiController]
public class PersonsController : BaseController
{
    private readonly IPersonService _personService;
    private readonly LinkGenerator _linkGenerator;

    public PersonsController(IPersonService personService, LinkGenerator linkGenerator)
        : base(linkGenerator)
    {
        _personService = personService;
    }

    [HttpGet(Name = nameof(GetPersons))]
    public IActionResult GetPersons(int page = 0, int pageSize = 10)
    {
        (var people, var total) = _personService.GetPeople(page, pageSize);
        var actor = people.Select(CreatePersonModel);
        var result = Paging(actor, total, page, pageSize, nameof(GetPersons));
        return Ok(result);
    }


    [HttpGet("{Id}", Name = nameof(GetPersonById))]

    public IActionResult GetPersonById(string Id)
    {
        var person = _personService.GetPersonById(Id);
        if (person == null)
            return NotFound();

        return Ok(CreatePersonModel(person));
    }

    [HttpGet("actor/{primaryName}", Name = nameof(GetPersonByName))]

    public IActionResult GetPersonByName(string primaryName)
    {
        var personName = _personService.GetPersonByName(primaryName);
        if (personName == null)
            return NotFound();

        return Ok(CreatePersonModel(personName));
    }

    /* [HttpPost]

    public IActionResult CreatePerson (CreatePersonModel model)
    {
        var person = new Person
        {
            PrimaryName = model.PrimaryName,
            DateOfBirth = model.DateOfBirth,
            DateOfDeath = model.DateOfDeath,
            NameRating = model.NameRating
        };

        Person newPerson = _personService.CreatePerson(person.PrimaryName, person.DateOfBirth, person.DateOfDeath, person.NameRating);
        return Created(GetUrl(nameof(GetPerson), new { newPerson.Id }), newPerson);
    }

    [HttpDelete("{id}")]
    public IActionResult DeletePerson(int id)
    {
        bool result = _personService.DeletePerson(id);
        return result ? Ok() : NotFound();

    } */

    private PersonModel CreatePersonModel(Person person)
    {
        return new PersonModel
        {
            url = GetUrl(nameof(GetPersons), new { person.Id }),
            primaryName = person.primaryName,
            dateOfBirth = person.dateOfBirth,
            dateOfDeath = person.dateOfDeath
        };
    }
}
