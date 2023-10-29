using backend.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace backend
{
        class RatingContext : DbContext
        {
            public DbSet<Movie> Movies { get; set; }
            public DbSet<Rating> Ratings { get; set; }

            protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
            {
            var connectionString = $"host=localhost;db=movie;uid=postgres;pwd=Ronja.";
                optionsBuilder.UseNpgsql(connectionString);
            }
        }
}
