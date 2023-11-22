
using DataLayer.Models;
using Microsoft.EntityFrameworkCore;

public class MovieContext : DbContext
{
    public DbSet<Bookmark> Bookmarks { get; set; }
    public DbSet<Search> SearchHistory { get; set; }
    public DbSet<User> Users { get; set; }
    public DbSet<TitleAkas> TitleAkas { get; set; }
    public DbSet<TitleBasics> TitleBasics { get; set; }
    public DbSet<Movie> Movies { get; set; }
    public DbSet<Rating> RatingsHistory { get; set; }
    public DbSet<Genres> Genres { get; set; }
    public DbSet<Person> Persons { get; set; }
    public DbSet<PersonAssociation> PersonAssociation { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.EnableSensitiveDataLogging();
        optionsBuilder
            .LogTo(Console.Out.WriteLine, Microsoft.Extensions.Logging.LogLevel.Information);
        optionsBuilder.UseNpgsql($"host=localhost;db=movie;uid=postgres;pwd=Ronja");
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        // bookmark
        modelBuilder.Entity<Bookmark>().ToTable("bookmarks");
        modelBuilder.Entity<Bookmark>()
            .Property(x => x.ID).HasColumnName("bookmarkid");
        modelBuilder.Entity<Bookmark>()
            .Property(x => x.userID).HasColumnName("userid");
        modelBuilder.Entity<Bookmark>()
            .Property(x => x.titleID).HasColumnName("titleid");
        modelBuilder.Entity<Bookmark>()
            .Property(x => x.status).HasColumnName("status");

        // user
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

        // search
        modelBuilder.Entity<Search>().ToTable("search");
        modelBuilder.Entity<Search>()
            .Property(x => x.userID).HasColumnName("userid");
        modelBuilder.Entity<Search>()
            .Property(x => x.searchString).HasColumnName("searchstring");
        modelBuilder.Entity<Search>()
            .Property(x => x.searchDate).HasColumnName("searchdate");
        modelBuilder.Entity<Search>()
            .HasKey(x => new { x.userID });

        // titleakas
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

        // titlebasics
        modelBuilder.Entity<TitleBasics>().ToTable("titlebasics");
        modelBuilder.Entity<TitleBasics>().Property(x => x.ID).HasColumnName("titleid");
        modelBuilder.Entity<TitleBasics>().Property(x => x.type).HasColumnName("titletype");
        modelBuilder.Entity<TitleBasics>().Property(x => x.isAdult).HasColumnName("isadult");
        modelBuilder.Entity<TitleBasics>().Property(x => x.startYear).HasColumnName("startyear");
        modelBuilder.Entity<TitleBasics>().Property(x => x.endYear).HasColumnName("endyear");
        modelBuilder.Entity<TitleBasics>().Property(x => x.poster).HasColumnName("poster");
        modelBuilder.Entity<TitleBasics>().Property(x => x.description).HasColumnName("plot");
        modelBuilder.Entity<TitleBasics>().Property(x => x.rating).HasColumnName("movie_rating");

        // rating
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

        // genres
        modelBuilder.Entity<Genres>().ToTable("genre");
        modelBuilder.Entity<Genres>()
            .Property(x => x.Id).HasColumnName("genreid");
        modelBuilder.Entity<Genres>()
            .Property(x => x.Name).HasColumnName("genrename");

        // persons
        modelBuilder.Entity<Person>().ToTable("person");
        modelBuilder.Entity<Person>()
            .Property(x => x.Id).HasColumnName("personid");
        modelBuilder.Entity<Person>()
            .Property(x => x.PrimaryName).HasColumnName("primaryname");
        modelBuilder.Entity<Person>()
            .Property(x => x.DateOfBirth).HasColumnName("dateofbirth");
        modelBuilder.Entity<Person>()
            .Property(x => x.DateOfDeath).HasColumnName("dateofdeath");

        // personassociation
        modelBuilder.Entity<PersonAssociation>().ToTable("personassociation");
        modelBuilder.Entity<PersonAssociation>().Property(x => x.TitleID).HasColumnName("titleid");
        modelBuilder.Entity<PersonAssociation>().Property(x => x.PersonID).HasColumnName("personid");
        modelBuilder.Entity<PersonAssociation>().Property(x => x.Ordering).HasColumnName("ordering");
        modelBuilder.Entity<PersonAssociation>().HasKey(pa => new { pa.TitleID, pa.PersonID, pa.Ordering });
    }
}