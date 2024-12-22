import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Login from "../../Authentication/Login";
import Home from "../Pages/Home/Home";
import Layout from "../Pages/Home/Layout/Layout";
import Register from "../../Authentication/Register";
import MyFoodRequest from "../Pages/FoodRequest/MyFoodRequest";
import AddFood from "../Pages/AddFood/AddFood";
import AvailableFoods from "../Pages/AvailableFoods/AvailableFoods";

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
        element: <Register></Register>,
      },
      {
        path: "/myFoodRequest",
        element: <MyFoodRequest></MyFoodRequest>,
      },
      {
        path: "/addfood",
        element: <AddFood></AddFood>,
      },
      {
        path: "/availablefoods",
        element: <AvailableFoods></AvailableFoods>,
      },
    ],
  },
]);

export default Router;
