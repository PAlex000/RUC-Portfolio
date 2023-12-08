export const FETCH_SEARCH_HISTORY_REQUEST = "FETCH_SEARCH_HISTORY_REQUEST";
export const FETCH_SEARCH_HISTORY_SUCCESS = "FETCH_SEARCH_HISTORY_SUCCESS";
export const FETCH_SEARCH_HISTORY_FAILURE = "FETCH_SEARCH_HISTORY_FAILURE";

export const fetchSearchHistoryRequest = () => ({
  type: FETCH_SEARCH_HISTORY_REQUEST,
});
export const fetchSearchHistorySuccess = (searchHistory) => ({
  type: FETCH_SEARCH_HISTORY_SUCCESS,
  payload: { searchHistory },
});
export const fetchSearchHistoryFailure = (error) => ({
  type: FETCH_SEARCH_HISTORY_FAILURE,
  payload: { error },
});

export const fetchSearchHistory = () => async (dispatch) => {
  dispatch(fetchSearchHistoryRequest());
  try {
    const response = await fetch("/api/search");
    const searchHistory = await response.json();
    dispatch(fetchSearchHistorySuccess(searchHistory));
  } catch (error) {
    dispatch(fetchSearchHistoryFailure(error.toString()));
  }
};

//--//

export const FETCH_SEARCH_HISTORY_BY_USER_REQUEST =
  "FETCH_SEARCH_HISTORY_BY_USER_REQUEST";
export const FETCH_SEARCH_HISTORY_BY_USER_SUCCESS =
  "FETCH_SEARCH_HISTORY_BY_USER_SUCCESS";
export const FETCH_SEARCH_HISTORY_BY_USER_FAILURE =
  "FETCH_SEARCH_HISTORY_BY_USER_FAILURE";

export const fetchSearchHistoryByUserRequest = () => ({
  type: FETCH_SEARCH_HISTORY_BY_USER_REQUEST,
});
export const fetchSearchHistoryByUserSuccess = (searchHistory) => ({
  type: FETCH_SEARCH_HISTORY_BY_USER_SUCCESS,
  payload: { searchHistory },
});
export const fetchSearchHistoryByUserFailure = (error) => ({
  type: FETCH_SEARCH_HISTORY_BY_USER_FAILURE,
  payload: { error },
});

export const fetchSearchHistoryByUserId = (userId) => async (dispatch) => {
  dispatch(fetchSearchHistoryByUserRequest());
  try {
    const response = await fetch(`/api/search/user/${userId}`);
    const searchHistory = await response.json();
    dispatch(fetchSearchHistoryByUserSuccess(searchHistory));
  } catch (error) {
    dispatch(fetchSearchHistoryByUserFailure(error.toString()));
  }
};

//--//

export const CREATE_SEARCH_REQUEST = "CREATE_SEARCH_REQUEST";
export const CREATE_SEARCH_SUCCESS = "CREATE_SEARCH_SUCCESS";
export const CREATE_SEARCH_FAILURE = "CREATE_SEARCH_FAILURE";

export const createSearchRequest = () => ({ type: CREATE_SEARCH_REQUEST });
export const createSearchSuccess = (search) => ({
  type: CREATE_SEARCH_SUCCESS,
  payload: { search },
});
export const createSearchFailure = (error) => ({
  type: CREATE_SEARCH_FAILURE,
  payload: { error },
});

export const createSearch = (searchData) => async (dispatch) => {
  dispatch(createSearchRequest());
  try {
    const response = await fetch("/api/search", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(searchData),
    });
    if (response.ok) {
      dispatch(createSearchSuccess());
    } else {
      throw new Error("Failed to create search entry");
    }
  } catch (error) {
    dispatch(createSearchFailure(error.toString()));
  }
};

//--//

export const DELETE_SEARCH_REQUEST = "DELETE_SEARCH_REQUEST";
export const DELETE_SEARCH_SUCCESS = "DELETE_SEARCH_SUCCESS";
export const DELETE_SEARCH_FAILURE = "DELETE_SEARCH_FAILURE";

export const deleteSearchRequest = () => ({ type: DELETE_SEARCH_REQUEST });
export const deleteSearchSuccess = () => ({ type: DELETE_SEARCH_SUCCESS });
export const deleteSearchFailure = (error) => ({
  type: DELETE_SEARCH_FAILURE,
  payload: { error },
});

export const deleteSearch = (searchData) => async (dispatch) => {
  dispatch(deleteSearchRequest());
  try {
    const response = await fetch("/api/search", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(searchData),
    });
    if (response.ok) {
      dispatch(deleteSearchSuccess());
    } else {
      throw new Error("Failed to delete search entry");
    }
  } catch (error) {
    dispatch(deleteSearchFailure(error.toString()));
  }
};
