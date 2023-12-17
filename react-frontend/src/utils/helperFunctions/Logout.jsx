import { logoutUser } from "../../redux/actions/UserActions";

export const logout = (dispatch, navigate) => {
  localStorage.removeItem("userToken");
  localStorage.removeItem("userId");
  dispatch(logoutUser());
  navigate("/login");
};
