import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./routes/Home";
import Program from "./routes/ProgramPage/Program";
import Course from "./routes/Course";
import Exercises from "./routes/ExercisesPage/Exercises";
import Login from "./routes/Login";
import LogOut from "./routes/LogOut";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/program",
    element: <Program />,
  },
  {
    path: "/course",
    element: <Course />,
  },
  {
    path: "/exercises",
    element: <Exercises />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/logout",
    element: <LogOut />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
