import {
  FETCH_GENRES_REQUEST,
  FETCH_GENRES_SUCCESS,
  FETCH_GENRES_FAILURE,
  FETCH_GENRE_BY_ID_REQUEST,
  FETCH_GENRE_BY_ID_SUCCESS,
  FETCH_GENRE_BY_ID_FAILURE,
  CREATE_GENRE_REQUEST,
  CREATE_GENRE_SUCCESS,
  CREATE_GENRE_FAILURE,
  UPDATE_GENRE_REQUEST,
  UPDATE_GENRE_SUCCESS,
  UPDATE_GENRE_FAILURE,
} from "./../actions/GenresActions";

const initialState = {
  genres: [],
  total: 0,
  currentGenre: null,
  loading: false,
  error: null,
};

const genresReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GENRES_REQUEST:
    case FETCH_GENRE_BY_ID_REQUEST:
    case CREATE_GENRE_REQUEST:
    case UPDATE_GENRE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_GENRES_SUCCESS:
      return {
        ...state,
        genres: action.payload.genres,
        total: action.payload.total,
        loading: false,
      };
    case FETCH_GENRE_BY_ID_SUCCESS:
    case UPDATE_GENRE_SUCCESS:
      return {
        ...state,
        currentGenre: action.payload.genre,
        loading: false,
      };
    case CREATE_GENRE_SUCCESS:
      return {
        ...state,
        genres: [...state.genres, action.payload.genre],
        loading: false,
      };
    case FETCH_GENRES_FAILURE:
    case FETCH_GENRE_BY_ID_FAILURE:
    case CREATE_GENRE_FAILURE:
    case UPDATE_GENRE_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };
    default:
      return state;
  }
};

export default genresReducer;
