using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace backend.Models;
public class Person
{
    public int Id { get; set; }
    public string PrimaryName { get; set; }
    public string? Job { get; set; }
    public DateTime DateOfBirth { get; set; }
    public DateTime DateOfDeath { get; set; }
    public float NameRating { get; set; }
}
