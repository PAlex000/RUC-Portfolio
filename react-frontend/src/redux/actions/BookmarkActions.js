export const FETCH_BOOKMARKS_REQUEST = "FETCH_BOOKMARKS_REQUEST";
export const FETCH_BOOKMARKS_SUCCESS = "FETCH_BOOKMARKS_SUCCESS";
export const FETCH_BOOKMARKS_FAILURE = "FETCH_BOOKMARKS_FAILURE";

export const fetchBookmarksRequest = () => ({ type: FETCH_BOOKMARKS_REQUEST });
export const fetchBookmarksSuccess = (bookmarks) => ({
  type: FETCH_BOOKMARKS_SUCCESS,
  payload: { bookmarks },
});
export const fetchBookmarksFailure = (error) => ({
  type: FETCH_BOOKMARKS_FAILURE,
  payload: { error },
});

export const fetchBookmarks = () => async (dispatch) => {
  dispatch(fetchBookmarksRequest());
  try {
    const response = await fetch("/api/bookmark");
    const bookmarks = await response.json();
    dispatch(fetchBookmarksSuccess(bookmarks));
  } catch (error) {
    dispatch(fetchBookmarksFailure(error.toString()));
  }
};

//--//

export const CREATE_BOOKMARK_REQUEST = "CREATE_BOOKMARK_REQUEST";
export const CREATE_BOOKMARK_SUCCESS = "CREATE_BOOKMARK_SUCCESS";
export const CREATE_BOOKMARK_FAILURE = "CREATE_BOOKMARK_FAILURE";

export const createBookmarkRequest = () => ({ type: CREATE_BOOKMARK_REQUEST });
export const createBookmarkSuccess = (bookmark) => ({
  type: CREATE_BOOKMARK_SUCCESS,
  payload: { bookmark },
});
export const createBookmarkFailure = (error) => ({
  type: CREATE_BOOKMARK_FAILURE,
  payload: { error },
});

export const createBookmark = (bookmarkData) => async (dispatch) => {
  dispatch(createBookmarkRequest());
  try {
    const response = await fetch("/api/bookmark", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bookmarkData),
    });
    const bookmark = await response.json();
    dispatch(createBookmarkSuccess(bookmark));
  } catch (error) {
    dispatch(createBookmarkFailure(error.toString()));
  }
};

//--//

export const DELETE_BOOKMARK_REQUEST = "DELETE_BOOKMARK_REQUEST";
export const DELETE_BOOKMARK_SUCCESS = "DELETE_BOOKMARK_SUCCESS";
export const DELETE_BOOKMARK_FAILURE = "DELETE_BOOKMARK_FAILURE";

export const deleteBookmarkRequest = (bookmarkId) => ({
  type: DELETE_BOOKMARK_REQUEST,
  payload: { bookmarkId },
});
export const deleteBookmarkSuccess = (bookmarkId) => ({
  type: DELETE_BOOKMARK_SUCCESS,
  payload: { bookmarkId },
});
export const deleteBookmarkFailure = (error) => ({
  type: DELETE_BOOKMARK_FAILURE,
  payload: { error },
});

export const deleteBookmark = (bookmarkId) => async (dispatch) => {
  dispatch(deleteBookmarkRequest(bookmarkId));
  try {
    const response = await fetch(`/api/bookmark/${bookmarkId}`, {
      method: "DELETE",
    });
    if (response.ok) {
      dispatch(deleteBookmarkSuccess(bookmarkId));
    } else {
      throw new Error("Failed to delete bookmark");
    }
  } catch (error) {
    dispatch(deleteBookmarkFailure(error.toString()));
  }
};