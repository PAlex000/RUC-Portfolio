using backend.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Reflection.Emit;

namespace backend;

public class MovieContext : DbContext
{
    private string v;

    public MovieContext(string v)
    {
        this.v = v;
    }

    public DbSet<Bookmark> Bookmarks { get; set; }
    public DbSet<Movie> Movies { get; set; }
    public DbSet<Rating> Ratings { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.EnableSensitiveDataLogging();
        optionsBuilder
            .LogTo(Console.Out.WriteLine, Microsoft.Extensions.Logging.LogLevel.Information);
        optionsBuilder.UseNpgsql($"host=localhost;db=movie;uid=postgres;pwd=Ronja");
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Bookmark>().ToTable("bookmarks");
        modelBuilder.Entity<Bookmark>()
            .Property(x => x.ID).HasColumnName("bookmarkid");
        modelBuilder.Entity<Bookmark>()
            .Property(x => x.userID).HasColumnName("userid");
        modelBuilder.Entity<Bookmark>()
            .Property(x => x.titleID).HasColumnName("titleid");
        modelBuilder.Entity<Bookmark>()
            .Property(x => x.status).HasColumnName("status");
        modelBuilder.Entity<Rating>().ToTable("title_ratings");
        modelBuilder.Entity<Rating>()
            .Property(x => x.TitleID).HasColumnName("tconst");
        modelBuilder.Entity<Rating>()
            .Property(x => x.AverageRating).HasColumnName("averagerating");
        modelBuilder.Entity<Rating>()
        .HasKey(r => new { r.TitleID, r.UserID });
    }
}