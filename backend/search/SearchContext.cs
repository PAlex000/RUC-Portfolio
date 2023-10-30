using search.Models;
using Microsoft.EntityFrameworkCore;

namespace search;
public class SearchContext : DbContext
{
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
        modelBuilder.Entity<Search>().ToTable("search");
        modelBuilder.Entity<Search>()
            .Property(x => x.userID).HasColumnName("userid");
        modelBuilder.Entity<Search>()
            .Property(x => x.searchString).HasColumnName("searchstring");
        modelBuilder.Entity<Search>()
            .Property(x => x.searchDate).HasColumnName("searchdate");
    }
}
