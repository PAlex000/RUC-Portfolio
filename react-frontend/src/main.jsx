import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProfileSettings from "./components/privateViews/ProfileSettings.jsx";
import Explorer from "./components/views/Explorer.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/profilesettings",
    element: <ProfileSettings/>
  },
  {
    path: "/explore",
    element: <Explorer />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
