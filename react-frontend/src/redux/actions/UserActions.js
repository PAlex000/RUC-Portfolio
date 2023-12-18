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
    const data = await response.json();
    const users = data.$values;
    dispatch(fetchUsersSuccess(users));
  } catch (error) {
    dispatch(fetchUsersFailure(error.toString()));
  }
};

//--//

export const FETCH_USER_DETAILS_REQUEST = "FETCH_USER_DETAILS_REQUEST";
export const FETCH_USER_DETAILS_SUCCESS = "FETCH_USER_DETAILS_SUCCESS";
export const FETCH_USER_DETAILS_FAILURE = "FETCH_USER_DETAILS_FAILURE";

export const fetchUserDetailsRequest = () => ({
  type: FETCH_USER_DETAILS_REQUEST,
});
export const fetchUserDetailsSuccess = (userDetails) => ({
  type: FETCH_USER_DETAILS_SUCCESS,
  payload: { userDetails },
});
export const fetchUserDetailsFailure = (error) => ({
  type: FETCH_USER_DETAILS_FAILURE,
  payload: { error },
});

export const fetchUserDetails = (userId) => async (dispatch) => {
  dispatch(fetchUserDetailsRequest());
  try {
    const response = await fetch(`/api/user/${userId}`);
    const userDetails = await response.json();
    dispatch(fetchUserDetailsSuccess(userDetails));
  } catch (error) {
    dispatch(fetchUserDetailsFailure(error.toString()));
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
      body: JSON.stringify({
        firstName: userData.inputFirstName,
        lastName: userData.inputLastName,
        phoneNo: userData.inputPhoneNumber,
        email: userData.inputUsername,
        password: userData.inputPassword,
      }),
    });

    const data = await response.json();
    dispatch(registerUserSuccess(data.token));
  } catch (error) {
    console.log("Error in registerUser:", error);
    dispatch(registerUserFailure(error.toString()));
  }
};

//--//

export const LOGIN_USER_REQUEST = "LOGIN_USER_REQUEST";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAILURE = "LOGIN_USER_FAILURE";

export const loginUserRequest = () => ({ type: LOGIN_USER_REQUEST });
export const loginUserSuccess = (token, userId) => ({
  type: LOGIN_USER_SUCCESS,
  payload: { token, userId },
});
export const loginUserFailure = (error) => ({
  type: LOGIN_USER_FAILURE,
  payload: { error },
});

export const loginUser = (userData) => async (dispatch) => {
  dispatch(loginUserRequest());
  try {
    const response = await fetch("/api/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: userData.inputUsername,
        password: userData.inputPassword,
      }),
    });

    if (!response.ok) {
      const errorRes = await response.json();
      throw new Error(
        errorRes.errors.email || errorRes.errors.password || "Failed to login"
      );
    }

    const data = await response.json();

    const getUserByEmailResponse = await fetch(
      `/api/user/email/${userData.inputUsername}`
    );
    const user = await getUserByEmailResponse.json();

    dispatch(loginUserSuccess(data.token, user.userId));
  } catch (error) {
    console.error("Error in loginUser:", error);
    dispatch(loginUserFailure(error.toString()));
  }
};

//--//

// Action Types
export const LOGOUT_USER_REQUEST = "LOGOUT_USER_REQUEST";
export const LOGOUT_USER_SUCCESS = "LOGOUT_USER_SUCCESS";
export const LOGOUT_USER_FAILURE = "LOGOUT_USER_FAILURE";

// Action Creators
export const logoutUserRequest = () => ({ type: LOGOUT_USER_REQUEST });
export const logoutUserSuccess = () => ({ type: LOGOUT_USER_SUCCESS });
export const logoutUserFailure = (error) => ({
  type: LOGOUT_USER_FAILURE,
  payload: { error },
});

// Logout Thunk
export const logoutUser = () => (dispatch) => {
  dispatch(logoutUserRequest());
  try {
    localStorage.removeItem("userToken");
    localStorage.removeItem("userId");
    dispatch(logoutUserSuccess());
  } catch (error) {
    dispatch(logoutUserFailure(error.toString()));
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
export const deleteUserSuccess = (userId) => ({
  type: DELETE_USER_SUCCESS,
  payload: { userId },
});
export const deleteUserFailure = (error) => ({
  type: DELETE_USER_FAILURE,
  payload: { error },
});

export const deleteUser = (userId) => async (dispatch) => {
  dispatch(deleteUserRequest());
  try {
    const response = await fetch(`/api/user/${userId}`, { method: "DELETE" });
    if (response.ok) {
      console.log(userId);
      dispatch(deleteUserSuccess(userId));
    } else {
      throw new Error("Failed to delete user");
    }
  } catch (error) {
    console.log(userId);
    dispatch(deleteUserFailure(error.toString()));
  }
};
