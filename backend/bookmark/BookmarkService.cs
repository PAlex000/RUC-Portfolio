﻿using bookmark.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace bookmark
{
    public class BookmarkService : IBookmarkService
    {
        private readonly BookmarkContext db = new BookmarkContext();
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