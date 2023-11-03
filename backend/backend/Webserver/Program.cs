using backend;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

builder.Services.AddSingleton<IGenreService, GenreService>();


var app = builder.Build();

app.MapControllers();

app.Run();
