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

    public IList<Search> GetSearchHistoryByUserId(int _userId)
    {
        return db.SearchHistory
            .Where(x => x.userId == _userId)
            .Select(x => new Search
            {
                userId = _userId,
                searchString = x.searchString,
                searchDate = x.searchDate
            })
            .ToList();
    }

    public bool CreateSearch(int _userId, string _searchString)
    {
        var search = new Search
        {
            userId = _userId,
            searchString = _searchString,
            searchDate = DateTime.UtcNow
        };
        db.Add(search);
        db.SaveChanges();
        return true;
    }

    public bool DeleteSearch(Search searchHistory)
    {
        return DeleteSearch(searchHistory.searchString, searchHistory.userId);
    }

    public bool DeleteSearch(string _searchString, int _userId)
    {
        var searchResult = db.SearchHistory.FirstOrDefault(x => x.searchString == _searchString && x.userId == _userId);
        if (searchResult != null)
        {
            db.SearchHistory.Remove(searchResult);
            return db.SaveChanges() > 0;
        }
        return false;
    }
}
