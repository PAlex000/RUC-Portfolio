export const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

export const fetchUsersRequest = () => ({ type: FETCH_USERS_REQUEST });
export const fetchUsersSuccess = (users) => ({
  type: FETCH_USERS_SUCCESS,
  payload: { users },
});
export const fetchUsersFailure = (error) => ({
  type: FETCH_USERS_FAILURE,
  payload: { error },
});

export const fetchUsers = () => async (dispatch) => {
  dispatch(fetchUsersRequest());
  try {
    const response = await fetch("/api/user");
    const users = await response.json();
    dispatch(fetchUsersSuccess(users));
  } catch (error) {
    dispatch(fetchUsersFailure(error.toString()));
  }
};

//--//

export const REGISTER_USER_REQUEST = "REGISTER_USER_REQUEST";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_FAILURE = "REGISTER_USER_FAILURE";

export const registerUserRequest = () => ({ type: REGISTER_USER_REQUEST });
export const registerUserSuccess = (token) => ({
  type: REGISTER_USER_SUCCESS,
  payload: { token },
});
export const registerUserFailure = (error) => ({
  type: REGISTER_USER_FAILURE,
  payload: { error },
});

export const registerUser = (userData) => async (dispatch) => {
  dispatch(registerUserRequest());
  try {
    const response = await fetch("/api/user/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });
    const data = await response.json();
    dispatch(registerUserSuccess(data.Token));
  } catch (error) {
    dispatch(registerUserFailure(error.toString()));
  }
};

//--//

export const LOGIN_USER_REQUEST = "LOGIN_USER_REQUEST";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAILURE = "LOGIN_USER_FAILURE";

export const loginUserRequest = () => ({ type: LOGIN_USER_REQUEST });
export const loginUserSuccess = (token) => ({
  type: LOGIN_USER_SUCCESS,
  payload: { token },
});
export const loginUserFailure = (error) => ({
  type: LOGIN_USER_FAILURE,
  payload: { error },
});

export const loginUser = (loginData) => async (dispatch) => {
  dispatch(loginUserRequest());
  try {
    const response = await fetch("/api/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginData),
    });
    if (!response.ok) {
      throw new Error("Failed to login");
    }
    const data = await response.json();
    dispatch(loginUserSuccess(data.Token));
  } catch (error) {
    dispatch(loginUserFailure(error.toString()));
  }
};

//--//

export const UPDATE_USER_EMAIL_REQUEST = "UPDATE_USER_EMAIL_REQUEST";
export const UPDATE_USER_EMAIL_SUCCESS = "UPDATE_USER_EMAIL_SUCCESS";
export const UPDATE_USER_EMAIL_FAILURE = "UPDATE_USER_EMAIL_FAILURE";

export const updateUserEmailRequest = () => ({
  type: UPDATE_USER_EMAIL_REQUEST,
});
export const updateUserEmailSuccess = () => ({
  type: UPDATE_USER_EMAIL_SUCCESS,
});
export const updateUserEmailFailure = (error) => ({
  type: UPDATE_USER_EMAIL_FAILURE,
  payload: { error },
});

export const updateUserEmail = (userId, newEmail) => async (dispatch) => {
  dispatch(updateUserEmailRequest());
  try {
    const response = await fetch(`/api/user/${userId}/update-email`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: newEmail }),
    });
    if (response.ok) {
      dispatch(updateUserEmailSuccess());
    } else {
      throw new Error("Failed to update email");
    }
  } catch (error) {
    dispatch(updateUserEmailFailure(error.toString()));
  }
};

//--//

export const DELETE_USER_REQUEST = "DELETE_USER_REQUEST";
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
export const DELETE_USER_FAILURE = "DELETE_USER_FAILURE";

export const deleteUserRequest = () => ({ type: DELETE_USER_REQUEST });
export const deleteUserSuccess = () => ({ type: DELETE_USER_SUCCESS });
export const deleteUserFailure = (error) => ({
  type: DELETE_USER_FAILURE,
  payload: { error },
});

export const deleteUser = (userId) => async (dispatch) => {
  dispatch(deleteUserRequest());
  try {
    const response = await fetch(`/api/user/${userId}`, { method: "DELETE" });
    if (response.ok) {
      dispatch(deleteUserSuccess());
    } else {
      throw new Error("Failed to delete user");
    }
  } catch (error) {
    dispatch(deleteUserFailure(error.toString()));
  }
};
