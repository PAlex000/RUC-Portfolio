
using System.ComponentModel.DataAnnotations;
namespace DataLayer.Models;

public class Person
{
    [Key]
    public string Id { get; set; }
    public string? primaryName { get; set; }
    public string? dateOfBirth { get; set; }
    public string? dateOfDeath { get; set; }
}
