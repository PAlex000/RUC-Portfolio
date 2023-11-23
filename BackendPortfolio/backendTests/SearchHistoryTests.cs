using DataLayer.Database;
using DataLayer.Models;
namespace BackendTests
{
    public class SearchHistoryTests
    {
        [Fact]
        public void Search_Object_HasUserIDSearchStringSearchDate()
        {
            var search = new Search();
            Assert.Equal(0, search.userId);
            Assert.Null(search.searchString);
            Assert.Equal(DateTime.MinValue, search.searchDate);
        }
        [Fact]
        public void GetAllSearch_NoArgument_ReturnsAllSearches()
        {
            var service = new SearchService();
            var search = service.GetSearchHistory();
            Assert.Equal(4, search.Count);
        }
        [Fact]
        public void GetSearchHistory_ValiduserId_ReturnsSearchHistoryObject()
        {
            var service = new SearchService();
            var search = service.GetSearchHistoryByUserId(1);
            Assert.Equal(3, search.Count);
        }
        [Fact]
        public void DeleteSearch_InvaliduserId_ValidSearchString_ReturnsFalse()
        {
            var service = new SearchService();
            var result = service.DeleteSearch("Twilight", -1);
            Assert.False(result);
        }
        [Fact]
        public void DeleteSearch_ValidUserId_InvalidSearchString_ReturnsFalse()
        {
            var service = new SearchService();
            var result = service.DeleteSearch("1232131231", 1);
            Assert.False(result);
        }
    }
}
