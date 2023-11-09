using DataLayer.Models;
using Microsoft.EntityFrameworkCore;

namespace DataLayer.Database;

public class PersonService : IPersonService
{

    public (IList<Person> persons, int count) GetPersons(int page, int pageSize)
    {
        var db = new MovieContext();
        var person =
            db.Persons
            .Skip(page * pageSize)
            .Take(pageSize)
            .ToList();
        return (person, db.Persons.Count());
    }

    public Person? GetPersonById(string personId)
    {
        var db = new MovieContext();
        var searchPId = db.Persons.FirstOrDefault(x => x.Id == personId);
        return searchPId;
    }

    public Person? GetPersonByName(string primaryName)
    {
        var db = new MovieContext();
        var result = db.Persons.FirstOrDefault(x => x.PrimaryName == primaryName);
        return result;
    }


    /* still not done, having difficulties
    public List<TitleBasics> GetPersonByKeyword(string personName, string titleName, string plotDescription)
    {
        var db = new MovieContex();
        var searchPKeyword = db.TitleBasics
            .Include(tb => tb.TitleAkas)
            .ThenInclude(tb => tb.Person)
            .Where(tb => tb.Plot.ToLower().Contains(plotDescription) || tb.TitleAkas.Any(akas => akas.TitleName.ToLower().Contains(titleName)))
            .Where(tb => tb.Person.Any(person => person.PrimaryName.ToLower().Contains(personName)));
        return searchPKeyword.ToList();

    } */

    public bool CreatePerson(Person newPerson)
    {
        var db = new MovieContext();
        var id = db.Persons.Max(x => x.Id) + 1;

        var person = new Person
        {
            Id = id,
            PrimaryName = newPerson.PrimaryName,
            DateOfBirth = newPerson.DateOfBirth,
            DateOfDeath = newPerson.DateOfDeath
        };

        db.Persons.Add(person);
        db.SaveChanges();
        return true;
    }

    public bool UpdatePerson(string personId, Person updatePerson)

    {
        var db = new MovieContext();
        var personExists = db.Persons
            .FirstOrDefault(x => x.Id == personId);

        if (personExists != null)
        {
            personExists.PrimaryName = updatePerson.PrimaryName;
            personExists.DateOfBirth = updatePerson.DateOfBirth;
            personExists.DateOfDeath = updatePerson.DateOfDeath;

            db.Update(personExists);
            return db.SaveChanges() > 0;
        }
        return false;
    }

    public bool DeletePerson(string personId)
    {
        var db = new MovieContext();
        var personDelete = db.Persons
            .Include(p => p.PersonAssociation)
            .SingleOrDefault(x => x.Id == personId);
        if (personDelete == null)
        {
            Console.WriteLine($"The actor with Id {personId} could not be found");
            return false;
        }
        db.Persons.Remove(personDelete);
        db.SaveChanges();
        return true;
    }
}
