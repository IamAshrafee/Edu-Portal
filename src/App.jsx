import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./components/Pages/Home";
import AdminHome from "./admin/Pages/AdminHome";
import Login from "./components/Pages/Login";
import Registration from "./components/Pages/Registration";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/AdminHome",
    element: <AdminHome />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/Registration",
    element: <Registration />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
