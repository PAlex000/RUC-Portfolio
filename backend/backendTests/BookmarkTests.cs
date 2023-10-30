using bookmark;
using bookmark.Models;
namespace backendTests
{
    public class BookmarkTests
    {
        [Fact]
        public void Bookmark_Object_HasIDTitleIDuserIDStatus()
        {
            var bookmark = new Bookmark();
            Assert.Equal(0, bookmark.ID);
            Assert.Null(bookmark.titleID);
            Assert.Equal(0, bookmark.userID);
            Assert.False(bookmark.status);
        }
        [Fact]
        public void GetAllBookmarks_NoArgument_ReturnsAllBookmarks()
        {
            var service = new BookmarkService();
            var bookmarks = service.GetBookmarks();
            Assert.Equal(3, bookmarks.Count);
            Assert.Equal("tt7554052", bookmarks.First().titleID);
        }
        [Fact]
        public void GetBookmark_ValidId_ReturnsCategoryObject()
        {
            var service = new BookmarkService();
            var bookmark = service.GetBookmarkById(1);
            Assert.Equal("tt10577876", bookmark?.titleID);
        }
        [Fact]
        public void DeleteBookmark_ValidId_RemoveBookmark()
        {
            var service = new BookmarkService();
            var bookmark = service.CreateBookmark(1, "tt10598994");
            var result = service.DeleteBookmark(bookmark.ID);
            Assert.True(result);
            bookmark = service.GetBookmarkById(bookmark.ID);
            Assert.Null(bookmark);
        }
        [Fact]
        public void DeleteBookmark_InvalidId_ReturnsFalse()
        {
            var service = new BookmarkService();
            var result = service.DeleteBookmark(-1);
            Assert.False(result);
        }
    }
}
