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
            Assert.Equal(0, bookmark.titleID);
            Assert.Equal(0, bookmark.userID);
            Assert.False(bookmark.status);
        }
    }
}
