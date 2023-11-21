using DataLayer.Database;
using DataLayer.Models;
namespace BackendTests
{
    public class GenreTests
    {
        [Fact]
        public void Genre_Object_HasIDName()
        {
            var genre = new Genres();
            Assert.Equal(0, genre.Id);
            Assert.Null(genre.Name);
        }
        [Fact]
        public void GetAllGenres_NoArgument_ReturnsAllGenres()
        {
            var service = new GenreService();
            var genres = service.GetGenre();
            Assert.Equal(1535, genres.Count);
        }
        [Fact]
        public void CreateGenre_NoArgument_CreatesGenre()
        {
            var service = new GenreService();
            var genres = service.CreateGenre("Test genre");
            Assert.NotNull(genres);
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
