import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./components/Pages/Home";
import AdminHome from "./admin/Pages/AdminHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/AdminHome",
    element: <AdminHome />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
