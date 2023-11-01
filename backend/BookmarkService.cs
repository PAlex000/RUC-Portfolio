using backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace backend
{
    public class BookmarkService : IBookmarkService
    {
        private readonly MovieContext db = new MovieContext("hey");
        public IList<Bookmark> GetBookmarks()
        {
            return new List<Bookmark>();
        }
    }
}
