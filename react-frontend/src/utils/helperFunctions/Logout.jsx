import { logoutUser } from "../../redux/actions/UserActions";

export const logout = (dispatch, navigate) => {
  localStorage.removeItem("userToken");
  dispatch(logoutUser());
  navigate("/login");
};
