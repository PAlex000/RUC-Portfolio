using DataLayer.Database;
using DataLayer.Models;
namespace BackendTests
{
    public class GenreTests
    {
        [Fact]
        public void Genre_Object_HasIDName()
        {
            var genre = new Genre();
            Assert.Equal(0, genre.Id);
            Assert.Null(genre.name);
        }
        [Fact]
        public void GetAllGenres_NoArgument_ReturnsAllGenres()
        {
            var service = new GenreService();
            var genres = service.GetGenre(10, 10);
            Assert.Equal(1535, genres.count);
        }
        [Fact]
        public void CreateGenre_NoArgument_CreatesGenre()
        {
            var service = new GenreService();
            var genre = service.CreateGenre("Test genre");
            Assert.NotNull(genre);
        }
        [Fact]
        public void DeleteGenre_ValidId_RemoveGenre()
        {
            var service = new GenreService();
            var result = service.DeleteGenre(1535);
            Assert.True(result);
        }
        [Fact]
        public void DeleteGenre_InvalidId_ReturnsFalse()
        {
            var service = new GenreService();
            var result = service.DeleteGenre(-1);
            Assert.False(result);
        }
    }
}
