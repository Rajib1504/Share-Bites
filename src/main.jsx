import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Router from "./assets/Router/Router.jsx";
import AuthPovider from "./Provider/AuthPovider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthPovider>
      <RouterProvider router={Router}></RouterProvider>
    </AuthPovider>
  </StrictMode>
);
