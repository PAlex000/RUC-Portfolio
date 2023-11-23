using DataLayer.Models;
using System.Collections.Generic;
using System.Linq;

namespace DataLayer.Database;
public class BookmarkService : IBookmarkService
{
    private readonly MovieContext db = new MovieContext();
    public IList<Bookmark> GetBookmarks()
    {
        return db.Bookmarks.ToList();
    }
    public Bookmark? GetBookmarkById(int bookmarkId)
    {
        return db.Bookmarks.FirstOrDefault(x => x.Id == bookmarkId);
    }
    public IList<Bookmark> GetBookmarksByUserId(int _userId)
    {
        return db.Bookmarks.Where(x => x.userId == _userId).Select(x => new Bookmark
        {
            Id = x.Id,
            titleId = x.titleId,
            userId = x.userId,
            status = x.status
        }).ToList();
    }
    public Bookmark? CreateBookmark(Bookmark bookmark)
    {
        var bookmarkId = db.Bookmarks.Max(x => x.Id) + 1;
        var newbookmark = new Bookmark
        {
            Id = bookmarkId,
            titleId = bookmark.titleId,
            userId = bookmark.userId,
            status = true
        };
        db.Add(bookmark);
        db.SaveChanges();
        return bookmark;
    }
    public bool DeleteBookmark(Bookmark bookmark)
    {
        return DeleteBookmark(bookmark.Id);
    }
    public bool DeleteBookmark(int bookmarkId)
    {
        var bookmark = db.Bookmarks.FirstOrDefault(x => x.Id == bookmarkId);
        if (bookmark != null)
        {
            db.Bookmarks.Remove(bookmark);
            return db.SaveChanges() > 0;
        }
        return false;
    }
}
