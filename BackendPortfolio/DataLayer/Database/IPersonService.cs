using Microsoft.EntityFrameworkCore;
using DataLayer.Models;

namespace DataLayer.Database;

public interface IPersonService
{

    public (IList<Person> persons, int count) GetPersons(int page, int pageSize);

    public Person? GetPersonById(string personId);

    public Person? GetPersonByName(string primaryName);

    //public bool CreatePerson(Person newPerson);

    //public bool DeletePerson(string personId);

    //public bool UpdatePerson(string personId, Person updatePerson);

    // public List<TitleBasics> GetPersonByKeyword(string personName, string titleName, string plotDescription); 

}
