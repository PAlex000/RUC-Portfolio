using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend;

public class MovieContext : DbContext
{
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

        modelBuilder.Entity<TitleAkas>().ToTable("titleakas");
        modelBuilder.Entity<TitleAkas>().Property(x => x.ID).HasColumnName("titleid");
        modelBuilder.Entity<TitleAkas>().Property(x => x.ordering).HasColumnName("ordering");
        modelBuilder.Entity<TitleAkas>().Property(x => x.title).HasColumnName("titlename");
        modelBuilder.Entity<TitleAkas>().Property(x => x.region).HasColumnName("region");
        modelBuilder.Entity<TitleAkas>().Property(x => x.attribute).HasColumnName("attribute");
        modelBuilder.Entity<TitleAkas>().Property(x => x.type).HasColumnName("typename");
        modelBuilder.Entity<TitleAkas>().Property(x => x.isOriginalTitle).HasColumnName("isoriginaltitle");
        modelBuilder.Entity<TitleAkas>().Property(x => x.language).HasColumnName("languagename");
        modelBuilder.Entity<TitleAkas>().HasOne(ta => ta.Basics).WithMany(tb => tb.Akas).HasForeignKey(ta => ta.ID);

        modelBuilder.Entity<TitleBasics>().ToTable("titlebasics");
        modelBuilder.Entity<TitleBasics>().Property(x => x.ID).HasColumnName("titleid");
        modelBuilder.Entity<TitleBasics>().Property(x => x.type).HasColumnName("titletype");
        modelBuilder.Entity<TitleBasics>().Property(x => x.isAdult).HasColumnName("isadult");
        modelBuilder.Entity<TitleBasics>().Property(x => x.startYear).HasColumnName("startyear");
        modelBuilder.Entity<TitleBasics>().Property(x => x.endYear).HasColumnName("endyear");
        modelBuilder.Entity<TitleBasics>().Property(x => x.poster).HasColumnName("poster");
        modelBuilder.Entity<TitleBasics>().Property(x => x.description).HasColumnName("plot");
        modelBuilder.Entity<TitleBasics>().Property(x => x.rating).HasColumnName("movie_rating");
    }
}