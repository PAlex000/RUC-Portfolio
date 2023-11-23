using Azure.Core.Pipeline;
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
            Assert.Null(person.primaryName);
            Assert.Null(person.dateOfBirth);
            Assert.Null(person.dateOfDeath);
        }
        [Fact]
        public void GetPeople_NoArgument_ReturnsAllPersons()
        {
            var service = new PersonService();
            var people = service.GetPeople(10,10);
            Assert.Equal(331314, people.count);
            Assert.Equal("Tom Cleary", people.people.First().primaryName);
        }

        [Fact]
        public void GetPersonById_ValidId_ReturnsPersonObject()
        {
            var service = new PersonService();
            var person = service.GetPersonById("nm0060799");
            Assert.Equal("Geoffrey Bateman", person.primaryName);
        }
        [Fact]
        public void GetPersonByName_ValidId_ReturnsPersonObject()
        {
            var service = new PersonService();
            var person = service.GetPersonByName("Geoffrey Bateman");
            Assert.Equal("nm0060799", person.Id);
        }
        [Fact]
        public void CreatePerson_ValidData_ReturnsTrue()
        {
            var service = new PersonService();
            Person person = new Person
            {
                primaryName = "Primary01",
                dateOfBirth = "2000",
                dateOfDeath = "2010"
            };
            bool result = service.CreatePerson(person);
            Assert.True(result);
            service.DeletePerson(service.GetPersonByName("Primary01").Id);
        }
        [Fact]
        public void DeletePerson_ValidId_ReturnsTrue()
        {
            var service = new PersonService();
            Person person = new Person
            {
                primaryName = "ToBeDeleted",
                dateOfBirth = "2000",
                dateOfDeath = "2010"
            };
            service.CreatePerson(person );
            string id = service.GetPersonByName("ToBeDeleted").Id;
            bool result = service.DeletePerson(id);
            Assert.True(result);
        }
        [Fact]
        public void DeletePerson_InvalidId_ReturnsFalse()
        {
            var service = new PersonService();
            bool result = service.DeletePerson("DefinitelyAGoodId");
            Assert.False(result);
        }
        [Fact]
        public void UpdatePerson_ValidId_ReturnsTrue()
        {
            var service = new PersonService();
            Person person = new Person
            {
                primaryName = "ToBeUpdated",
                dateOfBirth = "2000",
                dateOfDeath = ""
            };
            service.CreatePerson(person);
            string id = service.GetPersonByName("ToBeUpdated").Id;
            Person updatePerson = new Person
            {
                primaryName = "ValidPrimaryName",
                dateOfBirth = "2000",
                dateOfDeath = "2023"
            };
            bool result = service.UpdatePerson(id, updatePerson);
            Assert.True(result);
            service.DeletePerson(id);
        }
        [Fact]
        public void UpdatePerson_InvalidId_ReturnsFalse()
        {
            var service = new PersonService();
            Person updatePerson = new Person
            {
                primaryName = "ValidPrimaryName",
                dateOfBirth = "2000",
                dateOfDeath = "2023"
            };
            bool result = service.UpdatePerson("DefinitelyAGoodId", updatePerson);
            Assert.False(result);
        }
    }
}
