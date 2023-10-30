using bookmark.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace bookmark
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

    }
}
