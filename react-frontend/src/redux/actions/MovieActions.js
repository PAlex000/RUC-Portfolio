export const FETCH_MOVIES_REQUEST = "FETCH_MOVIES_REQUEST";
export const FETCH_MOVIES_SUCCESS = "FETCH_MOVIES_SUCCESS";
export const FETCH_MOVIES_FAILURE = "FETCH_MOVIES_FAILURE";

//Reg Action
export const fetchMoviesRequest = () => ({
  type: FETCH_MOVIES_REQUEST,
});

export const fetchMoviesSuccess = (movies, total) => ({
  type: FETCH_MOVIES_SUCCESS,
  payload: { movies, total },
});

export const fetchMoviesFailure = (error) => ({
  type: FETCH_MOVIES_FAILURE,
  payload: { error },
});

// Thunk Action
export const fetchMovies = (page, pageSize) => {
  return async (dispatch) => {
    dispatch(fetchMoviesRequest());
    try {
      const response = await fetch(
        `/api/movie?page=${page}&pageSize=${pageSize}`
      );
      const data = await response.json();
      if (data.items && data.items.$values) {
        for (var i = 0; i < data.items.$values.length; i++) {
          var Id = data.items.$values[i].url.split("/");
          data.items.$values[i].titleId = Id[5];
        }
      }
      dispatch(fetchMoviesSuccess(data.items.$values, data.total)); // items: {$id, $values[id, url, type, etc.]}
    } catch (error) {
      console.error("fetchMovies Error:", error);
      dispatch(fetchMoviesFailure(error.toString()));
    }
  };
};

// -- //

// Action Types | Fetch Movies by ID
export const FETCH_MOVIE_BY_ID_REQUEST = "FETCH_MOVIE_BY_ID_REQUEST";
export const FETCH_MOVIE_BY_ID_SUCCESS = "FETCH_MOVIE_BY_ID_SUCCESS";
export const FETCH_MOVIE_BY_ID_FAILURE = "FETCH_MOVIE_BY_ID_FAILURE";

//Reg Action
//Reg Action
export const fetchMovieByIdRequest = () => ({
  type: FETCH_MOVIE_BY_ID_REQUEST,
});

export const fetchMovieByIdSuccess = (movie) => ({
  type: FETCH_MOVIE_BY_ID_SUCCESS,
  payload: { movie },
});

export const fetchMovieByIdFailure = (error) => ({
  type: FETCH_MOVIE_BY_ID_FAILURE,
  payload: { error },
});

// Thunk Action
export const fetchMovieById = (titleId) => {
  return async (dispatch) => {
    dispatch(fetchMovieByIdRequest());
    try {
      const response = await fetch(`/api/movie/${titleId}`);
      const data = await response.json();
      dispatch(fetchMovieByIdSuccess(data));
    } catch (error) {
      dispatch(fetchMovieByIdFailure(error.toString()));
    }
  };
};

// -- //

//Action Type

export const FETCH_MOVIES_BY_RATING_REQUEST = "FETCH_MOVIES_BY_RATING_REQUEST";
export const FETCH_MOVIES_BY_RATING_SUCCESS = "FETCH_MOVIES_BY_RATING_SUCCESS";
export const FETCH_MOVIES_BY_RATING_FAILURE = "FETCH_MOVIES_BY_RATING_FAILURE";

// Regular Actions
export const fetchMoviesByRatingRequest = () => ({
  type: FETCH_MOVIES_BY_RATING_REQUEST,
});

export const fetchMoviesByRatingSuccess = (data) => ({
  type: FETCH_MOVIES_BY_RATING_SUCCESS,
  payload: data,
});

export const fetchMoviesByRatingFailure = (error) => ({
  type: FETCH_MOVIES_BY_RATING_FAILURE,
  payload: { error },
});

// Thunk Action
export const fetchMoviesByRating = (page, pageSize, minRating, maxRating) => {
  return async (dispatch) => {
    dispatch(fetchMoviesByRatingRequest());
    try {
      const response = await fetch(
        `/api/movie/byrating?page=${page}&pageSize=${pageSize}&minRating=${minRating}&maxRating=${maxRating}`
      );
      const data = await response.json();
      dispatch(fetchMoviesByRatingSuccess(data));
    } catch (error) {
      console.error("fetchMoviesByRating Error:", error);
      dispatch(fetchMoviesByRatingFailure(error.toString()));
    }
  };
};

//--//

// Action Types
export const FETCH_SIMILAR_MOVIES_REQUEST = "FETCH_SIMILAR_MOVIES_REQUEST ";
export const FETCH_SIMILAR_MOVIES_SUCCESS = "FETCH_SIMILAR_MOVIES_SUCCESS";
export const FETCH_SIMILAR_MOVIES_FAILURE = "FETCH_SIMILAR_MOVIES_FAILURE";

//Reg Action
export const fetchSimilarMoviesRequest = () => ({
  type: FETCH_SIMILAR_MOVIES_REQUEST,
});

export const fetchSimilarMoviesSuccess = (movies) => ({
  type: FETCH_SIMILAR_MOVIES_SUCCESS,
  payload: { movies },
});

export const fetchSimilarMoviesFailure = (error) => ({
  type: FETCH_SIMILAR_MOVIES_FAILURE,
  payload: { error },
});

// Thunk Action
export const fetchSimilarMovies = (movieId = "tt0112130") => {
  return async (dispatch) => {
    dispatch(fetchSimilarMoviesRequest());
    try {
      const response = await fetch(`/api/movie/${movieId}/similar`);
      const data = await response.json();
      dispatch(fetchSimilarMoviesSuccess(data)); // items: {$id, $values[id, url, type, etc.]}
    } catch (error) {
      dispatch(fetchSimilarMoviesFailure(error.toString()));
    }
  };
};

//Types

export const SEARCH_MOVIES_REQUEST = "SEARCH_MOVIES_REQUEST";
export const SEARCH_MOVIES_SUCCESS = "SEARCH_MOVIES_SUCCESS";
export const SEARCH_MOVIES_FAILURE = "SEARCH_MOVIES_FAILURE";

//Reg actions

export const searchMoviesRequest = () => ({ type: SEARCH_MOVIES_REQUEST });
export const searchMoviesSuccess = (movies) => ({
  type: SEARCH_MOVIES_SUCCESS,
  payload: { movies },
});
export const searchMoviesFailure = (error) => ({
  type: SEARCH_MOVIES_FAILURE,
  payload: { error },
});

//Thunk action

export const searchMovies = (searchString) => async (dispatch) => {
  dispatch(searchMoviesRequest());
  try {
    const response = await fetch(`/api/movie/search/${searchString}`);
    const movies = await response.json();
    dispatch(searchMoviesSuccess(movies));
  } catch (error) {
    dispatch(searchMoviesFailure(error.toString()));
  }
};

//Types

export const CREATE_MOVIE_REQUEST = "CREATE_MOVIE_REQUEST";
export const CREATE_MOVIE_SUCCESS = "CREATE_MOVIE_SUCCESS";
export const CREATE_MOVIE_FAILURE = "CREATE_MOVIE_FAILURE";

//Reg actions

export const createMovieRequest = () => ({ type: CREATE_MOVIE_REQUEST });
export const createMovieSuccess = (movie) => ({
  type: CREATE_MOVIE_SUCCESS,
  payload: { movie },
});
export const createMovieFailure = (error) => ({
  type: CREATE_MOVIE_FAILURE,
  payload: { error },
});

//Thunk actions

export const createMovie = (movieData) => async (dispatch) => {
  dispatch(createMovieRequest());
  try {
    const response = await fetch("/api/movie", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(movieData),
    });
    const movie = await response.json();
    dispatch(createMovieSuccess(movie));
  } catch (error) {
    dispatch(createMovieFailure(error.toString()));
  }
};

//Types

export const UPDATE_MOVIE_REQUEST = "UPDATE_MOVIE_REQUEST";
export const UPDATE_MOVIE_SUCCESS = "UPDATE_MOVIE_SUCCESS";
export const UPDATE_MOVIE_FAILURE = "UPDATE_MOVIE_FAILURE";

//Reg actions

export const updateMovieRequest = () => ({ type: UPDATE_MOVIE_REQUEST });
export const updateMovieSuccess = (movie) => ({
  type: UPDATE_MOVIE_SUCCESS,
  payload: { movie },
});
export const updateMovieFailure = (error) => ({
  type: UPDATE_MOVIE_FAILURE,
  payload: { error },
});

//Thunk actions

export const updateMovie = (movieId, movieData) => async (dispatch) => {
  dispatch(updateMovieRequest());
  try {
    const response = await fetch(`/api/movie/${movieId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(movieData),
    });

    if (!response.ok) {
      throw new Error("Update failed");
    }

    dispatch(updateMovieSuccess(movieId));
  } catch (error) {
    dispatch(updateMovieFailure(error.toString()));
  }
};

//Types

export const DELETE_MOVIE_REQUEST = "DELETE_MOVIE_REQUEST";
export const DELETE_MOVIE_SUCCESS = "DELETE_MOVIE_SUCCESS";
export const DELETE_MOVIE_FAILURE = "DELETE_MOVIE_FAILURE";

//Reg actions

export const deleteMovieRequest = () => ({ type: DELETE_MOVIE_REQUEST });
export const deleteMovieSuccess = (movieId) => ({
  type: DELETE_MOVIE_SUCCESS,
  payload: { movieId },
});
export const deleteMovieFailure = (error) => ({
  type: DELETE_MOVIE_FAILURE,
  payload: { error },
});

//Thunk actions

export const deleteMovie = (movieId) => async (dispatch) => {
  dispatch(deleteMovieRequest());
  try {
    await fetch(`/api/movie/${movieId}`, { method: "DELETE" });
    dispatch(deleteMovieSuccess(movieId));
  } catch (error) {
    dispatch(deleteMovieFailure(error.toString()));
  }
};
