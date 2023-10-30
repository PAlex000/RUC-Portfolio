using search.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace search
{
    public interface ISearchService
    {
        public IList<Search> GetSearchHistory();
        public IList<Search> GetSearchHistoryByUserId(int _userID);
        public Search? CreateSearch(int userId, string searchString);
        public bool DeleteSearch(Search searchHistory);
        public bool DeleteSearch(string searchString, int _userID);
    }
}
