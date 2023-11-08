using backend.Models;
using backend;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace backend
{
    public class PersonService : IPersonService
    {
        private readonly MovieContext db = new MovieContext();
        public List<Person> GetPersons()
        {
            return db.Persons.ToList();
        }

        public Person? GetPersonById(int personId)
        {
            var searchPId = db.Persons.FirstOrDefault(x => x.Id == personId);
            return searchPId;
        }

        public List<Person> GetPersonByName(string primaryName)
        {
            var result = db.Persons.Where(x => x.PrimaryName.ToLower().Contains(primaryName.ToLower())).ToList();
            return result;
        }


        // still not done, having difficulties
        //TODO FIX THIS
        /*
        public List<TitleBasics> GetPersonByKeyword(int personId, string titleName, string plotDescription)
        {
            var searchPKeyword = db.TitleBasics
                .Include(tb => tb.TitleAkas)
                .ThenInclude(tb => tb.Person)
                .Where(tb => tb.Plot.Contains(plotDescription));
            return searchPKeyword.ToList();

        }*/

        public Person CreatePerson(string PrimaryName, DateTime DateOfBirth, DateTime DateOfDeath, float NameRating)
        {
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

        public bool DeletePerson(int personId)
        {
            var person = db.Persons.FirstOrDefault(x => x.Id == personId);

            if (person != null)
            {
                db.Persons.Remove(person);
                return db.SaveChanges() > 0;
            }
            return false;
        }
    }
}
