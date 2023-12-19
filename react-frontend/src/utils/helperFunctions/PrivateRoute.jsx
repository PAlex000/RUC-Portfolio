import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("userToken");
  return token ? children : <Navigate to="/login" />;
};

export const PrivateRouteAdmin = ({ children }) => {
  const { token, userId } = useSelector((state) => state.userReducer);
  const isAdmin = token && userId === 9999;

  if (!isAdmin) {
    return <Navigate to="/" />;
  }
  return children;
};
