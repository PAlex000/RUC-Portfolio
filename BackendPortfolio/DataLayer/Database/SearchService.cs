using DataLayer.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DataLayer.Database;

public class SearchService : ISearchService
{
    private readonly MovieContext db = new MovieContext();
    public IList<Search> GetSearchHistory()
    {
        return db.SearchHistory.ToList();
    }
    public IList<Search> GetSearchHistoryByUserId(int _userID)
    {
        return db.SearchHistory
            .Where(x => x.userID == _userID)
            .Select(x => new Search
            {
                userID = _userID,
                searchString = x.searchString,
                searchDate = x.searchDate
            })
            .ToList();
    }
    public Search? CreateSearch(int userId, string searchString)
    {
        var search = new Search
        {
            userID = userId,
            searchString = searchString,
            searchDate = DateTime.UtcNow
        };
        db.Add(search);
        db.SaveChanges();
        return search;
    }
    public bool DeleteSearch(Search searchHistory)
    {
        return DeleteSearch(searchHistory.searchString, searchHistory.userID);
    }
    public bool DeleteSearch(string _searchString, int _userID)
    {
        var searchResult = db.SearchHistory.FirstOrDefault(x => x.searchString == _searchString && x.userID == _userID);
        if (searchResult != null)
        {
            db.SearchHistory.Remove(searchResult);
            return db.SaveChanges() > 0;
        }
        return false;
    }
}
