using backend.Models;
using System.Collections.Generic;

namespace backend
{
    public interface ISearchService
    {
        public IList<Search> GetSearchHistory();
        public IList<Search> GetSearchHistoryByUserId(int _userID);
        public Search? CreateSearch(int userId, string searchString);
        //public bool DeleteSearch(Search searchHistory);
        public bool DeleteSearch(string searchString, int _userID);
    }
}
