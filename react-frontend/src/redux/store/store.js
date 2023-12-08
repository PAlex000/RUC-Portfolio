import { configureStore } from "@reduxjs/toolkit";
import bookmarksReducer from "../reducers/BookmarksReducer";
import genresReducer from "../reducers/GenresReducers";
import moviesReducer from "../reducers/MovieReducers";
import personsReducer from "../reducers/PersonsReducers";
import ratingsReducer from "../reducers/RatingsReducers";
import searchReducer from "../reducers/SearchReducers";
import userReducer from "../reducers/UserReducers";

export const store = configureStore({
  reducer: {
    bookmarks: bookmarksReducer,
    genres: genresReducer,
    moviesReducer: moviesReducer,
    personsReducer: personsReducer,
    ratingsReducer: ratingsReducer,
    searchReducer: searchReducer,
    userReducer: userReducer,
  },
});

export default store;
