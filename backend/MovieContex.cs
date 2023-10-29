using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend;

public class MovieContext : DbContext
{
    public DbSet<Bookmark> Bookmarks { get; set; }
    public DbSet<TitleAkas> TitleAkas { get; set; }
    public DbSet<TitleBasics> TitleBasics { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.EnableSensitiveDataLogging();
        optionsBuilder
            .LogTo(Console.Out.WriteLine, Microsoft.Extensions.Logging.LogLevel.Information);
        optionsBuilder.UseNpgsql($"host=localhost;db=movie;uid=postgres;pwd=madkasse");
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


        modelBuilder.Entity<TitleAkas>().ToTable("titleakas");
        modelBuilder.Entity<TitleAkas>().Property(x => x.ID).HasColumnName("titleid");
        modelBuilder.Entity<TitleAkas>().Property(x => x.ordering).HasColumnName("ordering");
        modelBuilder.Entity<TitleAkas>().Property(x => x.title).HasColumnName("titlename");
        modelBuilder.Entity<TitleAkas>().Property(x => x.region).HasColumnName("region");
        modelBuilder.Entity<TitleAkas>().Property(x => x.attribute).HasColumnName("attribute");
        modelBuilder.Entity<TitleAkas>().Property(x => x.type).HasColumnName("typename");
        modelBuilder.Entity<TitleAkas>().Property(x => x.isOriginalTitle).HasColumnName("isoriginaltitle");

        modelBuilder.Entity<TitleBasics>().ToTable("titlebasics");
        modelBuilder.Entity<TitleBasics>().Property(x => x.ID).HasColumnName("titleid");
        modelBuilder.Entity<TitleBasics>().Property(x => x.type).HasColumnName("titletype");
        modelBuilder.Entity<TitleBasics>().Property(x => x.isAdult).HasColumnName("isadult");
        modelBuilder.Entity<TitleBasics>().Property(x => x.startYear).HasColumnName("startyear");
        modelBuilder.Entity<TitleBasics>().Property(x => x.endYear).HasColumnName("endYear");
        modelBuilder.Entity<TitleBasics>().Property(x => x.poster).HasColumnName("poster");
        modelBuilder.Entity<TitleBasics>().Property(x => x.description).HasColumnName("plot");
        modelBuilder.Entity<TitleBasics>().Property(x => x.rating).HasColumnName("movie_rating");

    }
}