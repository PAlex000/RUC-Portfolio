import {
  FETCH_BOOKMARKS_REQUEST,
  FETCH_BOOKMARKS_SUCCESS,
  FETCH_BOOKMARKS_FAILURE,
  CREATE_BOOKMARK_REQUEST,
  CREATE_BOOKMARK_SUCCESS,
  CREATE_BOOKMARK_FAILURE,
  DELETE_BOOKMARK_REQUEST,
  DELETE_BOOKMARK_SUCCESS,
  DELETE_BOOKMARK_FAILURE,
} from "./../actions/BookmarkActions";

const initialState = {
  bookmarks: [],
  bookmarkedMovies: [],
  loading: false,
  error: null,
};

const bookmarksReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKMARKS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_BOOKMARKS_SUCCESS:
      return {
        ...state,
        bookmarks: action.payload.bookmarks,
        bookmarkedMovies: action.payload.bookmarkedMovies,
        loading: false,
      };
    case FETCH_BOOKMARKS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case CREATE_BOOKMARK_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case CREATE_BOOKMARK_SUCCESS:
      return {
        ...state,
        bookmarks: [...state.bookmarks, action.payload.bookmark],
        loading: false,
      };
    case CREATE_BOOKMARK_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case DELETE_BOOKMARK_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case DELETE_BOOKMARK_SUCCESS:
      return {
        ...state,
        bookmarks: state.bookmarks.filter(
          (bookmark) => bookmark.id !== action.payload.bookmarkId
        ),
        loading: false,
      };
    case DELETE_BOOKMARK_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return { ...state };
  }
};

export default bookmarksReducer;
