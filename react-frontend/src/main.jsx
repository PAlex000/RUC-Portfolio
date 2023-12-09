import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RatingHistory from "./components/privateViews/RatingHistory.jsx";
import Bookmark from "./components/privateViews/Bookmark.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
    <RouterProvider router={router} />
  </React.StrictMode>
);
