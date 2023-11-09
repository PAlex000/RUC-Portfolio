using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using DataLayer.Database;
using System.Text.Json.Serialization;

var builder = WebApplication.CreateBuilder(args);

// Add authentication and authorization services
builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
})
.AddJwtBearer(options =>
{
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidateLifetime = true,
        ValidateIssuerSigningKey = true,
        ValidIssuer = "YourIssuer", // Replace with issuer
        ValidAudience = "YourAudience", // Replace with audience
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("YourSecretKey"))
    };
});

builder.Services.AddAuthorization();

builder.Services.AddControllers();

builder.Services.AddSingleton<IPersonService, PersonService>();
builder.Services.AddSingleton<IGenreService, GenreService>();
builder.Services.AddSingleton<IMovieService, MovieService>();
builder.Services.AddSingleton<ISearchService, SearchService>();
builder.Services.AddSingleton<IRatingService, RatingService>();
builder.Services.AddSingleton<IUserService, UserService>();
builder.Services.AddControllers().AddJsonOptions(x =>
    x.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.Preserve);


var app = builder.Build();

if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler();
}

// Add authentication and authorization middleware
app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();
