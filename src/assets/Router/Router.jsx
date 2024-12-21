import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Login from "../../Authentication/Login";
import Home from "../Pages/Home/Home";
import Layout from "../Pages/Home/Layout/Layout";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Login></Login>,
      },
    ],
  },
]);

export default Router;
