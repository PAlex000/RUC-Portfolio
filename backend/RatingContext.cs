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
            var connectionString = $"host=localhost;db=movie;uid=postgres;pwd=.";
                optionsBuilder.UseNpgsql(connectionString);
            }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Rating>().ToTable("rating");
            modelBuilder.Entity<Rating>()
                .Property(x => x.TitleID).HasColumnName("titleid");
            modelBuilder.Entity<Rating>()
                .Property(x => x.UserID).HasColumnName("userid");
            modelBuilder.Entity<Rating>()
                .Property(x => x.Grade).HasColumnName("grade");
            modelBuilder.Entity<Rating>()
                .Property(x => x.ReviewText).HasColumnName("reviewtext");
        }
    }
}
