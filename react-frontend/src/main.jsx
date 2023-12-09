import React from "react";
import ReactDOM from "react-dom/client";
import store from "./redux/store/store.js";
import { Provider } from "react-redux";
import App from "./App.jsx";
import Home from "./components/views/Home.jsx";
import Explorer from "./components/views/Explorer.jsx";
import Details from "./components/views/Details.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RatingHistory from "./components/privateViews/RatingHistory.jsx";
import Bookmark from "./components/privateViews/Bookmark.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "explorer", element: <Explorer /> },
      { path: "details", element: <Details /> },
    ],
  },
  {
    path: "/ratinghistory",
    element: <RatingHistory />,
  },
  {
    path: "/bookmark",
    element: <Bookmark/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
