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
            return new List<Bookmark>();
        }
    }
}
