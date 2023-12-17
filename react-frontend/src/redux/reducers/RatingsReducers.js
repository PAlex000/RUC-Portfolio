import {
  FETCH_RATING_HISTORY_REQUEST,
  FETCH_RATING_HISTORY_SUCCESS,
  FETCH_RATING_HISTORY_FAILURE,
  CREATE_RATING_REQUEST,
  CREATE_RATING_SUCCESS,
  CREATE_RATING_FAILURE,
  UPDATE_RATING_REQUEST,
  UPDATE_RATING_SUCCESS,
  UPDATE_RATING_FAILURE,
  DELETE_RATING_REQUEST,
  DELETE_RATING_SUCCESS,
  DELETE_RATING_FAILURE,
} from "../actions/RatingActions";

const initialState = {
  ratings: [],
  ratedMovies: [],
  loading: false,
  error: null,
};

const ratingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RATING_HISTORY_REQUEST:
    case CREATE_RATING_REQUEST:
    case UPDATE_RATING_REQUEST:
    case DELETE_RATING_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_RATING_HISTORY_SUCCESS:
      return {
        ...state,
        ratings: action.payload.ratings,
        ratedMovies: action.payload.ratedMovies,
        loading: false,
      };
    case CREATE_RATING_SUCCESS:
      return {
        ...state,
        ratings: [...state.ratings, action.payload.rating],
        loading: false,
      };
    case UPDATE_RATING_SUCCESS:
      return {
        ...state,
        ratings: state.ratings.map((rating) =>
          rating.id === action.payload.ratingId
            ? { ...rating, ...action.payload.ratingData }
            : rating
        ),
        loading: false,
      };
    case DELETE_RATING_SUCCESS:
      return {
        ...state,
        ratings: state.ratings.filter(
          (rating) => rating.id !== action.payload.ratingId
        ),
        loading: false,
      };
    case FETCH_RATING_HISTORY_FAILURE:
    case CREATE_RATING_FAILURE:
    case UPDATE_RATING_FAILURE:
    case DELETE_RATING_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default ratingsReducer;
