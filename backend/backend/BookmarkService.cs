using backend.Models;
using System.Collections.Generic;
using System.Linq;

namespace backend
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
        public Bookmark? CreateBookmark(int userId, string titleId)
        {
            var id = db.Bookmarks.Max(x => x.ID) + 1;
            var bookmark = new Bookmark
            {
                ID = id,
                titleID = titleId,
                userID = userId,
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
