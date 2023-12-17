export const FETCH_RATING_HISTORY_REQUEST = "FETCH_RATING_HISTORY_REQUEST";
export const FETCH_RATING_HISTORY_SUCCESS = "FETCH_RATING_HISTORY_SUCCESS";
export const FETCH_RATING_HISTORY_FAILURE = "FETCH_RATING_HISTORY_FAILURE";

export const fetchRatingHistoryRequest = () => ({
  type: FETCH_RATING_HISTORY_REQUEST,
});
export const fetchRatingHistorySuccess = (ratings, ratedMovies) => ({
  type: FETCH_RATING_HISTORY_SUCCESS,
  payload: { ratings, ratedMovies },
});
export const fetchRatingHistoryFailure = (error) => ({
  type: FETCH_RATING_HISTORY_FAILURE,
  payload: { error },
});

export const fetchRatingHistory = (userId) => async (dispatch) => {
  dispatch(fetchRatingHistoryRequest());
  try {
    const ratingResponse = await fetch(`/api/ratings/user/${userId}`);
    const ratings = await ratingResponse.json();
    var arrayOfTitleIds = [];
    var ratedMovies = [];
    if (ratings.$values) {
      ratings.$values.forEach((movie) => {
        arrayOfTitleIds.push(movie.titleId);
      });
    }
    for (const titleId of arrayOfTitleIds) {
      const temporaryResponse = await fetch(`/api/movie/${titleId}`);
      const temporaryData = await temporaryResponse.json();
      temporaryData.titleId = titleId;
      ratings.$values.forEach((rating) => {
        if (rating.titleId == titleId) {
          temporaryData.grade = rating.grade;
          temporaryData.rateDate = rating.rateDate;
          temporaryData.reviewText = rating.reviewText;
        }
      });
      console.log(ratings);
      console.log(temporaryData);
      ratedMovies.push(temporaryData);
    }
    console.log(ratedMovies);
    dispatch(fetchRatingHistorySuccess(ratings.$values, ratedMovies));
  } catch (error) {
    dispatch(fetchRatingHistoryFailure(error.toString()));
  }
};

//--//

export const CREATE_RATING_REQUEST = "CREATE_RATING_REQUEST";
export const CREATE_RATING_SUCCESS = "CREATE_RATING_SUCCESS";
export const CREATE_RATING_FAILURE = "CREATE_RATING_FAILURE";

export const createRatingRequest = () => ({ type: CREATE_RATING_REQUEST });
export const createRatingSuccess = (rating) => ({
  type: CREATE_RATING_SUCCESS,
  payload: { rating },
});
export const createRatingFailure = (error) => ({
  type: CREATE_RATING_FAILURE,
  payload: { error },
});

export const createRating = (ratingData) => async (dispatch) => {
  dispatch(createRatingRequest());
  try {
    const response = await fetch("/api/ratings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ratingData),
    });
    const rating = await response.json();
    dispatch(createRatingSuccess(rating));
  } catch (error) {
    dispatch(createRatingFailure(error.toString()));
  }
};

//--//

export const UPDATE_RATING_REQUEST = "UPDATE_RATING_REQUEST";
export const UPDATE_RATING_SUCCESS = "UPDATE_RATING_SUCCESS";
export const UPDATE_RATING_FAILURE = "UPDATE_RATING_FAILURE";

export const updateRatingRequest = () => ({ type: UPDATE_RATING_REQUEST });
export const updateRatingSuccess = (ratingId) => ({
  type: UPDATE_RATING_SUCCESS,
  payload: { ratingId },
});
export const updateRatingFailure = (error) => ({
  type: UPDATE_RATING_FAILURE,
  payload: { error },
});

export const updateRating =
  (titleId, userId, ratingData) => async (dispatch) => {
    dispatch(updateRatingRequest());
    try {
      const response = await fetch(`/api/ratings/${titleId}/${userId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(ratingData),
      });
      if (response.ok) {
        dispatch(updateRatingSuccess(`${titleId}-${userId}`));
      } else {
        throw new Error("Failed to update rating");
      }
    } catch (error) {
      dispatch(updateRatingFailure(error.toString()));
    }
  };

//--//

export const DELETE_RATING_REQUEST = "DELETE_RATING_REQUEST";
export const DELETE_RATING_SUCCESS = "DELETE_RATING_SUCCESS";
export const DELETE_RATING_FAILURE = "DELETE_RATING_FAILURE";

export const deleteRatingRequest = (titleId, userId) => ({
  type: DELETE_RATING_REQUEST,
  payload: { titleId, userId },
});
export const deleteRatingSuccess = (titleId, userId) => ({
  type: DELETE_RATING_SUCCESS,
  payload: { titleId, userId },
});
export const deleteRatingFailure = (error) => ({
  type: DELETE_RATING_FAILURE,
  payload: { error },
});

export const deleteRating = (titleId, userId) => async (dispatch) => {
  dispatch(deleteRatingRequest(titleId, userId));
  try {
    const response = await fetch(`/api/ratings/${titleId}/${userId}`, {
      method: "DELETE",
    });
    if (response.ok) {
      dispatch(deleteRatingSuccess(titleId, userId));
    } else {
      throw new Error("Failed to delete rating");
    }
  } catch (error) {
    dispatch(deleteRatingFailure(error.toString()));
  }
};
