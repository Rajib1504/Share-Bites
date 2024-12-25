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
        path: "/manageFoods",
        element: <MannageFoods></MannageFoods>,
      },
      {
        path: "/food/:id",
        element: <DetailsFood></DetailsFood>,
        // loader: ({ params }) => {
        //   fetch(`http://localhost:9000/food/${params.id}`);
        // },
      },
      {
        path: "/addfood",
        element: <AddFood></AddFood>,
      },
      {
        path: "/sortedFoods",
        element: <AvailableFoods></AvailableFoods>,
      },
    ],
  },
]);

export default Router;
