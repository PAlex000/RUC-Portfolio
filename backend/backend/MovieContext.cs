using backend.Models;
using Microsoft.EntityFrameworkCore;
namespace backend;

public class MovieContext : DbContext
{
    public DbSet<Bookmark> Bookmarks { get; set; }
    public DbSet<Search> SearchHistory { get; set; }
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.EnableSensitiveDataLogging();
        optionsBuilder
            .LogTo(Console.Out.WriteLine, Microsoft.Extensions.Logging.LogLevel.Information);
        optionsBuilder.UseNpgsql($"host=localhost;db=movie;uid=postgres;pwd=.");
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

        modelBuilder.Entity<Search>().ToTable("search");
        modelBuilder.Entity<Search>()
            .Property(x => x.userID).HasColumnName("userid");
        modelBuilder.Entity<Search>()
            .Property(x => x.searchString).HasColumnName("searchstring");
        modelBuilder.Entity<Search>()
            .Property(x => x.searchDate).HasColumnName("searchdate");
        modelBuilder.Entity<Search>()
            .HasKey(x => new { x.userID });
    }
}
