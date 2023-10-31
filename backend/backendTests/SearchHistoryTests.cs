using search;
using search.Models;
namespace backendTests
{
    public class SearchHistoryTests
    {
        [Fact]
        public void Search_Object_HasUserIDSearchStringSearchDate()
        {
            var search = new Search();
            Assert.Equal(0, search.userID);
            Assert.Null(search.searchString);
            Assert.Equal(DateTime.MinValue, search.searchDate);
        }
        [Fact]
        public void GetAllSearch_NoArgument_ReturnsAllSearches()
        {
            var service = new SearchService();
            var search = service.GetSearchHistory();
            Assert.Equal(4, search.Count);
            Assert.Equal("Twilight", search.Last().searchString);
        }
        [Fact]
        public void GetSearchHistory_ValiduserId_ReturnsSearchHistoryObject()
        {
            var service = new SearchService();
            var search = service.GetSearchHistoryByUserId(1);
            Assert.Equal(3, search.Count);
        }/*
        [Fact]
        public void DeleteSearch_ValidId_RemoveSearch()
        {
            var service = new SearchService();
            service.CreateSearch(1, "SearchStringTest12");
            var result = service.DeleteSearch("SearchStringTest12", 1);
            Assert.True(result);
        }*/
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
