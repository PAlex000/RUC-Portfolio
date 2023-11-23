using DataLayer.Database;
using DataLayer.Models;
namespace BackendTests
{
    public class MovieTests
    {
        [Fact]
        public void Movie_Object_HasIDTypeIsAdultStartYearEndYearPosterDescriptionRatingAkas()
        {
            var movie = new TitleBasics();
            Assert.Null(movie.ID);
            Assert.Null(movie.type);
            Assert.False(movie.isAdult);
            Assert.Null(movie.startYear);
            Assert.Null(movie.endYear);
            Assert.Null(movie.poster);
            Assert.Null(movie.description);
            Assert.Null(movie.rating);
            Assert.Null(movie.Akas);
        }
        [Fact]
        public void GetMovie_WithoutArgument_ReturnsAllMovies()
        {
            var service = new MovieService();
            var movies = service.GetMovie();
            Assert.Equal(109380, movies.Count);
        }
        [Fact]
        public void GetMovieById_ValidMovieId_ReturnsMovie()
        {
            var service = new MovieService();
            var movie = service.GetMovieById("tt1027669");
            Assert.NotNull(movie);
        }
        [Fact]
        public void GetMovieById_InValidMovieId_ReturnsNull()
        {
            var service = new MovieService();
            var movie = service.GetMovieById("Definitely not a good id");
            Assert.Null(movie);
        }
        [Fact]
        public void SearchMovies_ValidSearchString_ReturnsMovies()
        {
            var service = new MovieService();
            var movies = service.SearchMovies("A daughter looks to help her dad find his way back.");
            Assert.Equal(1, movies.Count);
        }
        [Fact]
        public void SearchMovies_InValidSearchString_ReturnsMovies()
        {
            var service = new MovieService();
            var movies = service.SearchMovies("There is no movie with this desc/title for sure");
            Assert.Equal(0, movies.Count);
        }
        [Fact]
        public void GetSimilarMovies_ReturnsMovies()
        {
            var service = new MovieService();
            var movies = service.GetSimilarMovies("tt1129980");
            Assert.Equal(8, movies.Count);
        }
        [Fact]
        public void DoesMovieExist_ValidMovieId_ReturnsTrue()
        {
            var service = new MovieService();
            var result = service.DoesMovieExist("tt1129980");
            Assert.True(result);
        }
        [Fact]
        public void DoesMovieExist_InValidMovieId_ReturnsFalse()
        {
            var service = new MovieService();
            var result = service.DoesMovieExist("tt11299000080");
            Assert.False(result);
        }
        [Fact]
        public void CreateMovie_WithValid_Details_ReturnsTrue()
        {
            var service = new MovieService();
            TitleAkas titleAkas = new TitleAkas
            {
                ID = "ttTestID",
                ordering = 1,
                title = "TestTitle",
                region = "EN",
                attribute = "Nope",
                type = "TestType",
                language = "EN",
                isOriginalTitle = true
            };
            TitleBasics movie = new TitleBasics
            {
                ID = "ttTestID",
                type = "TestType",
                isAdult = true,
                startYear = "2020",
                endYear = "2023",
                poster = "PosterLink",
                description = "Harry Potter",
                rating = 0,
                Akas = new List<TitleAkas> { titleAkas }
            };
            var result = service.CreateMovie(movie, titleAkas);
            Assert.True(result);
            service.DeleteMovie(movie.ID);
        }
        [Fact]
        public void DeleteMovie_ValidMovieId_ReturnsTrue()
        {
            var service = new MovieService();
            TitleAkas titleAkas = new TitleAkas
            {
                ID = "ttTestID",
                ordering = 1,
                title = "TestTitle",
                region = "EN",
                attribute = "Nope",
                type = "TestType",
                language = "EN",
                isOriginalTitle = true
            };
            TitleBasics movie = new TitleBasics
            {
                ID = "ttTestID",
                type = "TestType",
                isAdult = true,
                startYear = "2020",
                endYear = "2023",
                poster = "PosterLink",
                description = "Harry Potter",
                rating = 0,
                Akas = new List<TitleAkas> { titleAkas }
            };
            service.CreateMovie(movie, titleAkas);
            var result = service.DeleteMovie(movie.ID);
            Assert.True(result);
        }
        [Fact]
        public void DeleteMovie_InValidMovieId_ReturnsFalse()
        {
            var service = new MovieService();
            var result = service.DeleteMovie("Definitely not a good Id");
            Assert.False(result);
        }
        [Fact]
        public void UpdateMovie_ValidData()
        {
            var service = new MovieService();
            var result = service.GetMovieById("tt5343524");
            TitleBasics updatedMovie = new TitleBasics
            {
                ID = "tt5343524",
                type = "long",
                isAdult = true,
                startYear = "2016",
                endYear = "2023",
                poster = "PosterLink",
                description = "UpdatedDesc"
            };
            TitleAkas titleAkas = new TitleAkas
            {
                ID = "ttTestID",
                ordering = 1,
                title = "TestTitle",
                region = "EN",
                attribute = "Nope",
                type = "TestType",
                language = "EN",
                isOriginalTitle = true
            };
            service.UpdateMovie(result.ID, updatedMovie, new List<TitleAkas> { titleAkas });
            var newMovie = service.GetMovieById("tt5343524");
            Assert.Equal("tt5343524", newMovie.ID);
            Assert.Equal("long", newMovie.type);
            Assert.True(newMovie.isAdult);
            Assert.Equal("2016", newMovie.startYear);
            Assert.Equal("2023", newMovie.endYear);
            Assert.Equal("PosterLink", newMovie.poster);
            Assert.Equal("UpdatedDesc", newMovie.description);
        }
    }
}
