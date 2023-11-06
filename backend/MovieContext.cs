using backend.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Logging.Console;
using System.Collections.Generic;
using System.Reflection.Emit;

namespace backend;

public class MovieContext : DbContext
{
    
    public DbSet<Movie> Movies { get; set; }
    public DbSet<Rating> RatingsHistory { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.EnableSensitiveDataLogging();
        optionsBuilder
            .LogTo(Console.Out.WriteLine, Microsoft.Extensions.Logging.LogLevel.Information);
        optionsBuilder.UseNpgsql("Host=localhost;Database=movie;Username=postgres;Password=Ronja");
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
        modelBuilder.Entity<Rating>()
            .Property(x => x.RateDate).HasColumnName("ratedate");
        modelBuilder.Entity<Rating>()
        .HasKey(m => new { m.TitleID, m.UserID });
    }
}
