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

    } 

    public Person CreatePerson(string PrimaryName, DateTime DateOfBirth, DateTime DateOfDeath, float NameRating)
    {
        var db = new MovieContex();
        var id = db.Persons.Max(x => x.Id) + 1;

        var person = new Person
        {
            Id = id,
            PrimaryName = PrimaryName,
            DateOfBirth = DateOfBirth,
            DateOfDeath = DateOfDeath,
            NameRating = NameRating
        };

        db.Add(person);
        db.SaveChanges();
        return person;
    }

    public bool UpdatePerson(int personId)

    {
        var db = new MovieContex();
        Person person = db.Persons.FirstOrDefault(x => x.Id == personId);

        if (person != null)

            db.SaveChanges();
        return true;
    }


    public bool DeletePerson(int personId)
    {
        var db = new MovieContex();
        var person = db.Persons.FirstOrDefault(x => x.Id == personId);

        if (person != null)
        {
            db.Persons.Remove(person);
            return db.SaveChanges() > 0;
        }
        return false;
    }


} */
}

