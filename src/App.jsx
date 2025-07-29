import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./components/Pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
