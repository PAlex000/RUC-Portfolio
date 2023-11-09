
using System.ComponentModel.DataAnnotations;

namespace DataLayer.Models;

public class Person
{
    [Key]
    public string? Id { get; set; }
    public string? PrimaryName { get; set; }
    public string? DateOfBirth { get; set; }
    public string? DateOfDeath { get; set; }
    public virtual ICollection<PersonAssociation> PersonAssociation { get; set; }

}
