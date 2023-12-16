// React
import React from "react";
// Router
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
// Redux
import { Provider } from "react-redux";
import store from "./redux/store/store.js";
// Homemade components
import App from "./App.jsx";
import Bookmark from "./components/privateViews/Bookmark.jsx";
import Details from "./components/views/Details.jsx";
import Explorer from "./components/views/Explorer.jsx";
import Home from "./components/views/Home.jsx";
import Login from "./components/views/Login.jsx";
import RatingHistory from "./components/privateViews/RatingHistory.jsx";
import Signup from "./components/views/Signup.jsx";
import PrivateRoute from "./utils/helperFunctions/PrivateRoute.jsx";
import { loginUserSuccess } from "./redux/actions/UserActions.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "explorer",
        element: (
          <PrivateRoute>
            <Explorer />
          </PrivateRoute>
        ),
      },
      { path: "details", element: <Details /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
      { path: "ratinghistory", element: <RatingHistory /> },
      { path: "bookmark", element: <Bookmark  /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

const token = localStorage.getItem("userToken");
if (token) {
  store.dispatch(loginUserSuccess(token));
}

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
