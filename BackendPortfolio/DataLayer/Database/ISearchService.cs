using DataLayer.Models;
using System.Collections.Generic;

namespace DataLayer.Database;

public interface ISearchService
{
    public IList<Search> GetSearchHistory();
    public IList<Search> GetSearchHistoryByUserId(int _userId);
    public bool CreateSearch(int _userId, string _searchString);
    public bool DeleteSearch(Search searchHistory);
    public bool DeleteSearch(string _searchString, int _userId);
}
