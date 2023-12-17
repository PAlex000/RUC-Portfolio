import {
  FETCH_SEARCH_HISTORY_REQUEST,
  FETCH_SEARCH_HISTORY_SUCCESS,
  FETCH_SEARCH_HISTORY_FAILURE,
  FETCH_SEARCH_HISTORY_BY_USER_REQUEST,
  FETCH_SEARCH_HISTORY_BY_USER_SUCCESS,
  FETCH_SEARCH_HISTORY_BY_USER_FAILURE,
  CREATE_SEARCH_REQUEST,
  CREATE_SEARCH_SUCCESS,
  CREATE_SEARCH_FAILURE,
  DELETE_SEARCH_REQUEST,
  DELETE_SEARCH_SUCCESS,
  DELETE_SEARCH_FAILURE,
} from "./../actions/SearchActions";

const initialState = {
  searchHistory: [],
  loading: false,
  error: null,
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SEARCH_HISTORY_REQUEST:
    case FETCH_SEARCH_HISTORY_BY_USER_REQUEST:
    case CREATE_SEARCH_REQUEST:
    case DELETE_SEARCH_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_SEARCH_HISTORY_SUCCESS:
    case FETCH_SEARCH_HISTORY_BY_USER_SUCCESS:
      return {
        ...state,
        searchHistory: action.payload.searchHistory,
        loading: false,
      };
    case CREATE_SEARCH_SUCCESS:
      //search should be returned in the payload?
      return {
        ...state,
        searchHistory: [...state.searchHistory, action.payload.search],
        loading: false,
      };
    case DELETE_SEARCH_SUCCESS:
      return {
        ...state,
        searchHistory: state.searchHistory.filter(
          (entry) => entry.id !== action.payload.id // is id the right identifier?
        ),
        loading: false,
      };
    case FETCH_SEARCH_HISTORY_FAILURE:
    case FETCH_SEARCH_HISTORY_BY_USER_FAILURE:
    case CREATE_SEARCH_FAILURE:
    case DELETE_SEARCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default searchReducer;
