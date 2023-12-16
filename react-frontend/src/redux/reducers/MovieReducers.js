import {
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
  FETCH_MOVIE_BY_ID_REQUEST,
  FETCH_MOVIE_BY_ID_SUCCESS,
  FETCH_MOVIE_BY_ID_FAILURE,
  FETCH_SIMILAR_MOVIES_REQUEST,
  FETCH_SIMILAR_MOVIES_SUCCESS,
  FETCH_SIMILAR_MOVIES_FAILURE,
  SEARCH_MOVIES_REQUEST,
  SEARCH_MOVIES_SUCCESS,
  SEARCH_MOVIES_FAILURE,
  CREATE_MOVIE_REQUEST,
  CREATE_MOVIE_SUCCESS,
  CREATE_MOVIE_FAILURE,
  UPDATE_MOVIE_REQUEST,
  UPDATE_MOVIE_SUCCESS,
  UPDATE_MOVIE_FAILURE,
  DELETE_MOVIE_REQUEST,
  DELETE_MOVIE_SUCCESS,
  DELETE_MOVIE_FAILURE,
} from "./../actions/MovieActions";

const initialState = {
  movies: [],
  total: 0,
  currentMovie: null,
  similarMovies: [],
  searchResults: [],
  loading: false,
  error: null,
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES_REQUEST:
    case FETCH_MOVIE_BY_ID_REQUEST:
    case FETCH_SIMILAR_MOVIES_REQUEST:
    case SEARCH_MOVIES_REQUEST:
    case CREATE_MOVIE_REQUEST:
    case UPDATE_MOVIE_REQUEST:
    case DELETE_MOVIE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.payload.movies,
        total: action.payload.total,
        loading: false,
      };
    case FETCH_MOVIE_BY_ID_SUCCESS:
      return {
        ...state,
        currentMovie: action.payload.movie,
        loading: false,
      };
    case FETCH_SIMILAR_MOVIES_SUCCESS:
      return {
        ...state,
        similarMovies: action.payload.movies,
        loading: false,
      };
    case SEARCH_MOVIES_SUCCESS:
      return {
        ...state,
        searchResults: action.payload.movies,
        loading: false,
      };
    case CREATE_MOVIE_SUCCESS:
      return {
        ...state,
        movies: [...state.movies, action.payload.movie],
        loading: false,
      };
    case UPDATE_MOVIE_SUCCESS:
      return {
        ...state,
        movies: state.movies.map((movie) =>
          movie.id === action.payload.movieId ? action.payload.movie : movie
        ),
        loading: false,
      };
    case DELETE_MOVIE_SUCCESS:
      return {
        ...state,
        movies: state.movies.filter(
          (movie) => movie.id !== action.payload.movieId
        ),
        loading: false,
      };
    case FETCH_MOVIES_FAILURE:
    case FETCH_MOVIE_BY_ID_FAILURE:
    case FETCH_SIMILAR_MOVIES_FAILURE:
    case SEARCH_MOVIES_FAILURE:
    case CREATE_MOVIE_FAILURE:
    case UPDATE_MOVIE_FAILURE:
    case DELETE_MOVIE_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };
    default:
      return { ...state };
  }
};

export default moviesReducer;
