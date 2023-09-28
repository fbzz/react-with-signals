import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Pure } from "./pages/pure";
import { SignalsPage } from "./pages/signals-page";
import { createState } from "./context/TodoContext";
import Example from "./pages/example";
import { SignalsWrapper } from "./pages/signals-wrapper";
import { createSimpleState } from "./context/NumberContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignalsPage />,
  },
  {
    path: "/pure",
    element: <Pure />,
  },
  {
    path: "/example",
    element: <Example />,
  },
  {
    path: "/wrapper",
    element: <SignalsWrapper />,
  },
]);

export const AppState = createContext(createState());
export const SimplestState = createContext(createSimpleState());

ReactDOM.createRoot(document.getElementById("root")!).render(
  //<React.StrictMode>
  <AppState.Provider value={createState()}>
    <SimplestState.Provider value={createSimpleState()}>
      <RouterProvider router={router}></RouterProvider>
    </SimplestState.Provider>
    <span className="absolute b-0 w-full text-center">
      Made with 🧡 for{" "}
      <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-br from-orange-200 to-orange-600">
        Devexperts
      </span>
    </span>
  </AppState.Provider>
  //</React.StrictMode>
);
