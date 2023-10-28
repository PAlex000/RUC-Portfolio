﻿using backend.Models;

namespace backend
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