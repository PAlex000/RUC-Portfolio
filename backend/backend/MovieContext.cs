using backend.Models;
using Microsoft.EntityFrameworkCore;
namespace backend;

public class MovieContext : DbContext
{
    public DbSet<Bookmark> Bookmarks { get; set; }
    public DbSet<Search> SearchHistory { get; set; }
    public DbSet<User> User { get; set; }
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

        modelBuilder.Entity<User>().ToTable("userrelation");
        modelBuilder.Entity<User>()
            .Property(x => x.userID).HasColumnName("userid");
        modelBuilder.Entity<User>()
            .Property(x => x.firstName).HasColumnName("firstname");
        modelBuilder.Entity<User>()
            .Property(x => x.lastName).HasColumnName("lastname");
        modelBuilder.Entity<User>()
            .Property(x => x.email).HasColumnName("email");
        modelBuilder.Entity<User>()
            .Property(x => x.pwdHash).HasColumnName("pwdhash");
        modelBuilder.Entity<User>()
            .Property(x => x.pwdHash).HasColumnName("pwdhash");
        modelBuilder.Entity<User>()
            .Property(x => x.phoneNo).HasColumnName("phoneno");
        modelBuilder.Entity<User>()
            .Property(x => x.isVerified).HasColumnName("isverified");
        modelBuilder.Entity<User>()
            .Property(x => x.isActive).HasColumnName("isactive");

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
