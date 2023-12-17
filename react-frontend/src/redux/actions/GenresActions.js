export const FETCH_GENRES_REQUEST = "FETCH_GENRES_REQUEST";
export const FETCH_GENRES_SUCCESS = "FETCH_GENRES_SUCCESS";
export const FETCH_GENRES_FAILURE = "FETCH_GENRES_FAILURE";

export const fetchGenresRequest = () => ({ type: FETCH_GENRES_REQUEST });
export const fetchGenresSuccess = (genres, total) => ({
  type: FETCH_GENRES_SUCCESS,
  payload: { genres, total },
});
export const fetchGenresFailure = (error) => ({
  type: FETCH_GENRES_FAILURE,
  payload: { error },
});

export const fetchGenres =
  (page = 0, pageSize = 10) =>
  async (dispatch) => {
    dispatch(fetchGenresRequest());
    try {
      const response = await fetch(
        `/api/genre?page=${page}&pageSize=${pageSize}`
      );
      const data = await response.json();
      dispatch(fetchGenresSuccess(data.genres, data.total));
    } catch (error) {
      dispatch(fetchGenresFailure(error.toString()));
    }
  };

// -- //

export const FETCH_GENRE_BY_ID_REQUEST = "FETCH_GENRE_BY_ID_REQUEST";
export const FETCH_GENRE_BY_ID_SUCCESS = "FETCH_GENRE_BY_ID_SUCCESS";
export const FETCH_GENRE_BY_ID_FAILURE = "FETCH_GENRE_BY_ID_FAILURE";

export const fetchGenreByIdRequest = () => ({
  type: FETCH_GENRE_BY_ID_REQUEST,
});
export const fetchGenreByIdSuccess = (genre) => ({
  type: FETCH_GENRE_BY_ID_SUCCESS,
  payload: { genre },
});
export const fetchGenreByIdFailure = (error) => ({
  type: FETCH_GENRE_BY_ID_FAILURE,
  payload: { error },
});

export const fetchGenreById = (genreId) => async (dispatch) => {
  dispatch(fetchGenreByIdRequest());
  try {
    const response = await fetch(`/api/genre/${genreId}`);
    const genre = await response.json();
    dispatch(fetchGenreByIdSuccess(genre));
  } catch (error) {
    dispatch(fetchGenreByIdFailure(error.toString()));
  }
};

// -- //

export const CREATE_GENRE_REQUEST = "CREATE_GENRE_REQUEST";
export const CREATE_GENRE_SUCCESS = "CREATE_GENRE_SUCCESS";
export const CREATE_GENRE_FAILURE = "CREATE_GENRE_FAILURE";

export const createGenreRequest = () => ({ type: CREATE_GENRE_REQUEST });
export const createGenreSuccess = (genre) => ({
  type: CREATE_GENRE_SUCCESS,
  payload: { genre },
});
export const createGenreFailure = (error) => ({
  type: CREATE_GENRE_FAILURE,
  payload: { error },
});

export const createGenre = (genreData) => async (dispatch) => {
  dispatch(createGenreRequest());
  try {
    const response = await fetch("/api/genre", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(genreData),
    });
    const genre = await response.json();
    dispatch(createGenreSuccess(genre));
  } catch (error) {
    dispatch(createGenreFailure(error.toString()));
  }
};

//--//

export const UPDATE_GENRE_REQUEST = "UPDATE_GENRE_REQUEST";
export const UPDATE_GENRE_SUCCESS = "UPDATE_GENRE_SUCCESS";
export const UPDATE_GENRE_FAILURE = "UPDATE_GENRE_FAILURE";

export const updateGenreRequest = () => ({ type: UPDATE_GENRE_REQUEST });
export const updateGenreSuccess = (genreId) => ({
  type: UPDATE_GENRE_SUCCESS,
  payload: { genreId },
});
export const updateGenreFailure = (error) => ({
  type: UPDATE_GENRE_FAILURE,
  payload: { error },
});

export const updateGenre = (genreId, genreData) => async (dispatch) => {
  dispatch(updateGenreRequest());
  try {
    const response = await fetch(`/api/genre/${genreId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(genreData),
    });
    if (response.ok) {
      dispatch(updateGenreSuccess(genreId));
    } else {
      throw new Error("Failed to update genre");
    }
  } catch (error) {
    dispatch(updateGenreFailure(error.toString()));
  }
};
