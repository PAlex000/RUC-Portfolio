using backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace backend
{
    public interface IPersonService
    {
        public List<Person> GetPersons();
        public Person? GetPersonById(int id);
        public List<Person> GetPersonByName(string primaryName);
        public Person CreatePerson(string PrimaryName, DateTime DateOfBirth, DateTime DateOfDeath, float NameRating);
        public bool DeletePerson(int personId);
        //public List<TitleBasics> GetPersonByKeyword(int personId, string titleName, string plotDescription);
    }
}
