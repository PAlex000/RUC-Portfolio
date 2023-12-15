export const logout = (navigate) => {
  localStorage.removeItem("userToken");
  navigate("/");
};
