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
    }
}
