using DataLayer.Database;
using DataLayer.Models;

namespace BackendTests
{
    public class PersonTests
    {
        [Fact]
        public void Person_Object_HasIDPrimaryNameDateOfBirthDateOfDeath()
        {
            var person = new Person();
            Assert.Null(person.Id);
            Assert.Null(person.PrimaryName);
            Assert.Null(person.DateOfBirth);
            Assert.Null(person.DateOfDeath);
        }
        [Fact]
        public void GetPersons_NoArgument_ReturnsAllPersons()
        {
            var service = new PersonService();
            var persons = service.GetPersons(10,10);
            Assert.Equal(331314, persons.count);
            Assert.Equal("Tom Cleary", persons.persons.First().PrimaryName);
        }

        [Fact]
        public void GetPersonById_ValidId_ReturnsPersonObject()
        {
            var service = new PersonService();
            var person = service.GetPersonById("nm0060799");
            Assert.Equal("Geoffrey Bateman", person.PrimaryName);
        }
        [Fact]
        public void GetPersonByName_ValidId_ReturnsPersonObject()
        {
            var service = new PersonService();
            var person = service.GetPersonByName("Geoffrey Bateman");
            Assert.Equal("nm0060799", person.Id);
        }
        //TODO: Add tests for Update/Delete/Create
    }
}
