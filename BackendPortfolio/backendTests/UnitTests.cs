/*using DataLayer.Database;
using DataLayer.Models;
using System.ComponentModel;
using System.Globalization;

namespace BackendTests
{
    public class PersonTests
    {
        [Fact]
        public void Person_Object_HasIDPrimaryName()
        {
            var person = new Person();
            var date = DateTime.Parse(DateTime.Now.ToString()).Date;
            Assert.Equal(0, person.Id);
            Assert.Null(person.PrimaryName);
            Assert.Equal(date, person.DateOfBirth);
            Assert.Equal(date, person.DateOfDeath);
            Assert.Equal(0, person.NameRating);
        }

        [Fact]

        public void GetPersons_NoArgument_ReturnsAllPersons()
        {
            var service = new PersonService();
            var persons = service.GetPersons();
            Assert.Equal(331314, persons.Count);
            Assert.Equal("Chingiz Kapin", persons.First().PrimaryName);
        }

        [Fact]

        public void GetPersonById_ValidId_ReturnsPersonObject()
        {
            var service = new PersonService();
            var person = service.GetPersonById(1);
            Assert.Equal("Chingiz Kapin", person.PrimaryName);
        }

         [Fact]
        public void CreatePerson_ValidData_CreatePersonAndReturnsNewObject()
        {
            var service = new PersonService();
            var person = service.CreatePerson("Chingiz Kapin");
            Assert.Equal("Chingiz Kapin", person.PrimaryName);
        } 

        [Fact]
        public void DeletePerson_InvalidPerson_ReturnsFalse()
        {
            var service = new PersonService();
            var result = service.DeletePerson(-1);
            Assert.False(result);
        }
    }
} */