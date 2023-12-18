
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
    public DbSet<Genre> Genres { get; set; }
    public DbSet<Person> People { get; set; }
    public DbSet<PersonAssociation> PersonAssociation { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.EnableSensitiveDataLogging();
        optionsBuilder
            .LogTo(Console.Out.WriteLine, Microsoft.Extensions.Logging.LogLevel.Information);
        optionsBuilder.UseNpgsql($"host=localhost;db=movie;uid=postgres;pwd=2002");
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        // bookmark
        modelBuilder.Entity<Bookmark>().ToTable("bookmarks");
        modelBuilder.Entity<Bookmark>()
            .Property(x => x.Id).HasColumnName("bookmarkid");
        modelBuilder.Entity<Bookmark>()
            .Property(x => x.userId).HasColumnName("userid");
        modelBuilder.Entity<Bookmark>()
            .Property(x => x.titleId).HasColumnName("titleid");
        modelBuilder.Entity<Bookmark>()
            .Property(x => x.status).HasColumnName("status");

        // user
        modelBuilder.Entity<User>().ToTable("userrelation");
        modelBuilder.Entity<User>()
            .Property(x => x.userId).HasColumnName("userid");
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
            .Property(x => x.userId).HasColumnName("userid");
        modelBuilder.Entity<Search>()
            .Property(x => x.searchString).HasColumnName("searchstring");
        modelBuilder.Entity<Search>()
            .Property(x => x.searchDate).HasColumnName("searchdate");
        modelBuilder.Entity<Search>()
            .HasKey(x => new { x.userId });

        // titleakas
        modelBuilder.Entity<TitleAkas>().ToTable("titleakas");
        modelBuilder.Entity<TitleAkas>().Property(x => x.Id).HasColumnName("titleid");
        modelBuilder.Entity<TitleAkas>().Property(x => x.ordering).HasColumnName("ordering");
        modelBuilder.Entity<TitleAkas>().Property(x => x.title).HasColumnName("titlename");
        modelBuilder.Entity<TitleAkas>().Property(x => x.region).HasColumnName("region");
        modelBuilder.Entity<TitleAkas>().Property(x => x.attribute).HasColumnName("attribute");
        modelBuilder.Entity<TitleAkas>().Property(x => x.type).HasColumnName("typename");
        modelBuilder.Entity<TitleAkas>().Property(x => x.isOriginalTitle).HasColumnName("isoriginaltitle");
        modelBuilder.Entity<TitleAkas>().Property(x => x.language).HasColumnName("languagename");
        modelBuilder.Entity<TitleAkas>().HasOne(ta => ta.basics).WithMany(tb => tb.akas).HasForeignKey(ta => ta.Id);

        // titlebasics
        modelBuilder.Entity<TitleBasics>().ToTable("titlebasics");
        modelBuilder.Entity<TitleBasics>().Property(x => x.Id).HasColumnName("titleid");
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
            .Property(x => x.titleId).HasColumnName("titleid");
        modelBuilder.Entity<Rating>()
            .Property(x => x.userId).HasColumnName("userid");
        modelBuilder.Entity<Rating>()
            .Property(x => x.grade).HasColumnName("grade");
        modelBuilder.Entity<Rating>()
            .Property(x => x.reviewText).HasColumnName("reviewtext");
        modelBuilder.Entity<Rating>()
            .Property(x => x.rateDate).HasColumnName("ratedate");
        modelBuilder.Entity<Rating>()
        .HasKey(m => new { m.titleId, m.userId });

        // genres
        modelBuilder.Entity<Genre>().ToTable("genre");
        modelBuilder.Entity<Genre>()
            .Property(x => x.Id).HasColumnName("genreid");
        modelBuilder.Entity<Genre>()
            .Property(x => x.name).HasColumnName("genrename");

        // persons
        modelBuilder.Entity<Person>().ToTable("person");
        modelBuilder.Entity<Person>()
            .Property(x => x.Id).HasColumnName("personid");
        modelBuilder.Entity<Person>()
            .Property(x => x.primaryName).HasColumnName("primaryname");
        modelBuilder.Entity<Person>()
            .Property(x => x.dateOfBirth).HasColumnName("dateofbirth");
        modelBuilder.Entity<Person>()
            .Property(x => x.dateOfDeath).HasColumnName("dateofdeath");

        // personassociation
        modelBuilder.Entity<PersonAssociation>().ToTable("personassociation");
        modelBuilder.Entity<PersonAssociation>().Property(x => x.titleId).HasColumnName("titleid");
        modelBuilder.Entity<PersonAssociation>().Property(x => x.personId).HasColumnName("personid");
        modelBuilder.Entity<PersonAssociation>().Property(x => x.ordering).HasColumnName("ordering");
        modelBuilder.Entity<PersonAssociation>().HasKey(pa => new { pa.titleId, pa.personId, pa.ordering });
    }
}