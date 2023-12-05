using DataLayer.Database;
using DataLayer.Models;
namespace BackendTests
{
    public class BookmarkTests
    {
        [Fact]
        public void Bookmark_Object_HasIDTitleIDuserIDStatus()
        {
            var bookmark = new Bookmark();
            Assert.Equal(0, bookmark.Id);
            Assert.Null(bookmark.titleId);
            Assert.Equal(0, bookmark.userId);
            Assert.False(bookmark.status);
        }
        [Fact]
        public void GetAllBookmarks_NoArgument_ReturnsAllBookmarks()
        {
            var service = new BookmarkService();
            var bookmarks = service.GetBookmarks();
            Assert.Equal(5, bookmarks.Count);
            Assert.Equal("tt7535994", bookmarks.First().titleId);
        }
        [Fact]
        public void GetBookmark_ValidId_ReturnsBookmarkObject()
        {
            var service = new BookmarkService();
            var bookmark = service.GetBookmarkById(1);
            Assert.Equal("tt7535994", bookmark?.titleId);
        }
        [Fact]
        public void DeleteBookmark_ValidId_RemoveBookmark()
        {
            var service = new BookmarkService();

            var bookmark = service.CreateBookmark(new Bookmark {
            userId = 1,
            titleId = "tt10598994"});
            var result = service.DeleteBookmark(bookmark.Id);
            Assert.True(result);
            bookmark = service.GetBookmarkById(bookmark.Id);
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
