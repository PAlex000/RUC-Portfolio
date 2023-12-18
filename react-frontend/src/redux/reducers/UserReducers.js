import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_USER_FAILURE,
  LOGOUT_USER_REQUEST,
  LOGOUT_USER_SUCCESS,
  UPDATE_USER_EMAIL_REQUEST,
  UPDATE_USER_EMAIL_SUCCESS,
  UPDATE_USER_EMAIL_FAILURE,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE,
} from "./../actions/UserActions";

const initialState = {
  users: [],
  token: null,
  loading: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
    case REGISTER_USER_REQUEST:
    case LOGIN_USER_REQUEST:
    case UPDATE_USER_EMAIL_REQUEST:
    case DELETE_USER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload.users,
        loading: false,
      };
    case REGISTER_USER_SUCCESS:
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        userId: action.payload.userId,
        loading: false,
      };
    case UPDATE_USER_EMAIL_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        users: state.users.filter(
          (user) => user.userId !== action.payload.userId
        ),
        loading: false,
      };
    case FETCH_USERS_FAILURE:
    case REGISTER_USER_FAILURE:
    case LOGIN_USER_FAILURE:
    case UPDATE_USER_EMAIL_FAILURE:
    case DELETE_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case LOGOUT_USER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOGOUT_USER_SUCCESS:
      return {
        ...state,
        token: null,
        userId: null,
        loading: false,
      };
    case LOGOUT_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default userReducer;
