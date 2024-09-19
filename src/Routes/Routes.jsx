import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import ComingSoon from "../Pages/ComingSoon/ComingSoon";


  const isCommingSoon = true;

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
            path: '/',
            element: isCommingSoon ? <ComingSoon /> : <Home />
        },
      ]
    },
  ]);