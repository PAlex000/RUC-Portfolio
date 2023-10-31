using Microsoft.EntityFrameworkCore;

namespace DataLayer;

public class MovieContex : DbContext
{
    public DbSet<Genres> Genres { get; set; }


    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.EnableSensitiveDataLogging();
        optionsBuilder
            .LogTo(Console.Out.WriteLine, Microsoft.Extensions.Logging.LogLevel.Information);
        optionsBuilder.UseNpgsql($"host=localhost;db=movie;uid=postgres;pwd=Cristina12@");
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Genres>().ToTable("genre");
        modelBuilder.Entity<Genres>()
            .Property(x => x.Id).HasColumnName("genreid");
        modelBuilder.Entity<Genres>()
            .Property(x => x.Name).HasColumnName("genrename");

    }
}
