import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Login from "../../Authentication/Login";
import Home from "../Pages/Home/Home";
import Layout from "../Pages/Home/Layout/Layout";
import Register from "../../Authentication/Register";
import MyFoodRequest from "../Pages/FoodRequest/MyFoodRequest";
import AddFood from "../Pages/AddFood/AddFood";
import AvailableFoods from "../Pages/AvailableFoods/AvailableFoods";
import DetailsFood from "../../Components/DetailsFood";
import MannageFoods from "../Pages/MannageFoods";
import PrivateRouter from "../../Components/PrivateRoute";
import ErrorElement from "../Pages/AddFood/Error/ErrorElement";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorElement />,
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
        element: (
          <PrivateRouter>
            <MyFoodRequest></MyFoodRequest>,
          </PrivateRouter>
        ),
      },
      {
        path: "/manageFoods",
        element: (
          <PrivateRouter>
            <MannageFoods></MannageFoods>,
          </PrivateRouter>
        ),
      },
      {
        path: "/food/:id",
        element: <DetailsFood></DetailsFood>,
      },
      {
        path: "/addfood",
        element: (
          <PrivateRouter>
            <AddFood></AddFood>,
          </PrivateRouter>
        ),
      },
      {
        path: "/sortedFoods",
        element: <AvailableFoods></AvailableFoods>,
      },
    ],
  },
]);

export default Router;
