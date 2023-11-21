using DataLayer.Models;
using System.Collections.Generic;
using System.Linq;

namespace DataLayer.Database
{
    public class BookmarkService : IBookmarkService
    {
        private readonly MovieContext db = new MovieContext();
        public IList<Bookmark> GetBookmarks()
        {
            return db.Bookmarks.ToList();
        }
        public Bookmark? GetBookmarkById(int bookmarkId)
        {
            return db.Bookmarks.FirstOrDefault(x => x.ID == bookmarkId);
        }
        public IList<Bookmark> GetBookmarksByUserId(int userId)
        {
            return db.Bookmarks.Where(x => x.userID == userId).Select(x => new Bookmark
            {
                ID = x.ID,
                titleID = x.titleID,
                userID = x.userID,
                status = x.status
            }).ToList();
        }
    public Bookmark? CreateBookmark(Bookmark bookmark)
        {
            var id = db.Bookmarks.Max(x => x.ID) + 1;
            var newbookmark = new Bookmark
            {
                ID = id,
                titleID = bookmark.titleID,
                userID = bookmark.userID,
                status = true
            };
            db.Add(bookmark);
            db.SaveChanges();
            return bookmark;
        }
        public bool DeleteBookmark(Bookmark bookmark)
        {
            return DeleteBookmark(bookmark.ID);
        }
        public bool DeleteBookmark(int bookmarkId)
        {
            var bookmark = db.Bookmarks.FirstOrDefault(x => x.ID == bookmarkId);
            if (bookmark != null)
            {
                db.Bookmarks.Remove(bookmark);
                return db.SaveChanges() > 0;
            }
            return false;
        }
    }
}
