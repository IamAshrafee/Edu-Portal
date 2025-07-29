import React from "react";
import Navbar from "./components/Common/Navbar";
import Sidebar from "./components/Common/Sidebar";
import { createBrowserRouter, RouterProvider } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World</div>,
  },
]);

const App = () => {
  return (
    
      <RouterProvider router={router} />
  
  );
};

export default App;
