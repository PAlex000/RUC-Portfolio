using DataLayer.Database;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

builder.Services.AddSingleton<IPersonService, PersonService>();
builder.Services.AddSingleton<IGenreService, GenreService>();
builder.Services.AddSingleton<IBookmarkService, BookmarkService>();
builder.Services.AddSingleton<IRatingService, RatingService>();
builder.Services.AddSingleton<IMovieService, MovieService>();




var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler();
    
}

app.MapControllers();

app.Run();
