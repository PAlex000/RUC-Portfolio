﻿using DataLayer.Models;
using System.Collections.Generic;

namespace DataLayer.Database
{
    public interface IBookmarkService
    {
        IList<Bookmark> GetBookmarks();
        public Bookmark? GetBookmarkById(int bookmarkId);
        public Bookmark? CreateBookmark(Bookmark bookmark);
        public bool DeleteBookmark(Bookmark bookmark);
        public bool DeleteBookmark(int bookmarkId);
    }
}