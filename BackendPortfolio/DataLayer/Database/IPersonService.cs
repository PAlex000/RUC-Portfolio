using Microsoft.EntityFrameworkCore;
using DataLayer.Models;

namespace DataLayer.Database;

    public interface IPersonService
{ 

    public (IList<Person> persons, int count) GetPersons(int page, int pageSize);

    public Person? GetPersonById(string personId);

    public Person? GetPersonByName(string primaryName);

    /* public Person CreatePerson(string PrimaryName, DateTime DateOfBirth, DateTime DateOfDeath, float NameRating );

    public bool DeletePerson(int personId);

    public List<TitleBasics> GetPersonByKeyword(string personName, string titleName, string plotDescription); */


}

