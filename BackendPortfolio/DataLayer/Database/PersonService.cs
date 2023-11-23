﻿using DataLayer.Models;
using Microsoft.EntityFrameworkCore;

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
    /*
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
    }*/
}
