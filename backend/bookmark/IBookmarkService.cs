using bookmark.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace bookmark
{
    public interface IBookmarkService
    {
        IList<Bookmark> GetBookmarks();
        public Bookmark? GetBookmarkById(int bookmarkId);
        public Bookmark? CreateBookmark(int userId, string titleId);
        public bool DeleteBookmark(Bookmark bookmark);
        public bool DeleteBookmark(int bookmarkId);
    }
}
