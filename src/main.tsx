import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Pure } from "./pages/pure";
import { Signals } from "./pages/signals";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Signals />,
  },
  {
    path: "/pure",
    element: <Pure />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
