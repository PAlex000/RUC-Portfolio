using DataLayer.Models;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace DataLayer.Database;

public class PersonService : IPersonService
{
    private readonly MovieContext db = new MovieContext();

    public (IList<Person> persons, int count) GetPersons(int page, int pageSize)
    {
        var person =
            db.Persons
            .Skip(page * pageSize)
            .Take(pageSize)
            .ToList();
        return (person, db.Persons.Count());
    }

    public Person? GetPersonById(string personId)
    {
        return db.Persons.FirstOrDefault(x => x.Id == personId);
    }

    public Person? GetPersonByName(string primaryName)
    {
        return db.Persons.FirstOrDefault(x => x.PrimaryName == primaryName);
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
        int id = int.Parse(db.Persons.Max(x => x.Id).Substring(2));
        id++;
        Person person = new Person
        {
            Id = "nm" + id,
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
        Person person = db.Persons.FirstOrDefault(x => x.Id == personId);

        if (person != null)
        {
            person.PrimaryName = updatePerson.PrimaryName;
            person.DateOfBirth = updatePerson.DateOfBirth;
            person.DateOfDeath = updatePerson.DateOfDeath;

            db.Persons.Update(person);
            return db.SaveChanges() > 0;
        }
        return false;
    }

    public bool DeletePerson(string personId)
    {
        Person person = db.Persons.FirstOrDefault(x => x.Id == personId);
        if (person != null)
        {
            db.Persons.Remove(person);
            return db.SaveChanges() > 0;
        }
        return false;
    }
}
