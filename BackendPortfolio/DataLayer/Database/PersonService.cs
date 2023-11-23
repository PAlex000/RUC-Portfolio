using DataLayer.Models;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace DataLayer.Database;

public class PersonService : IPersonService
{
    private readonly MovieContext db = new MovieContext();

    public (IList<Person> people, int count) GetPeople(int page, int pageSize)
    {
        var person =
            db.People
            .Skip(page * pageSize)
            .Take(pageSize)
            .ToList();
        return (person, db.People.Count());
    }

    public Person? GetPersonById(string personId)
    {
        return db.People.FirstOrDefault(x => x.Id == personId);
    }

    public Person? GetPersonByName(string primaryName)
    {
        return db.People.FirstOrDefault(x => x.primaryName == primaryName);
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
        //id is nm99937091 -- Cutting the "nm" part, casting it to int, add 1 to it then cast back to string
        int personId = int.Parse(db.People.Max(x => x.Id).Substring(2));
        personId++;
        Person person = new Person
        {
            Id = "nm" + personId,
            primaryName = newPerson.primaryName,
            dateOfBirth = newPerson.dateOfBirth,
            dateOfDeath = newPerson.dateOfDeath
        };
        db.People.Add(person);
        db.SaveChanges();
        return true;
    }

    public bool UpdatePerson(string personId, Person updatePerson)
    {
        Person person = db.People.FirstOrDefault(x => x.Id == personId);

        if (person != null)
        {
            person.primaryName = updatePerson.primaryName;
            person.dateOfBirth = updatePerson.dateOfBirth;
            person.dateOfDeath = updatePerson.dateOfDeath;

            db.People.Update(person);
            return db.SaveChanges() > 0;
        }
        return false;
    }

    public bool DeletePerson(string personId)
    {
        Person person = db.People.FirstOrDefault(x => x.Id == personId);
        if (person != null)
        {
            db.People.Remove(person);
            return db.SaveChanges() > 0;
        }
        return false;
    }
}
