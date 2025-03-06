import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import ComingSoon from "../Pages/ComingSoon/ComingSoon";


const isCommingSoon = true;

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ComingSoon />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/flight',
        element: <ComingSoon />
      },
      {
        path: '/packages',
        element: <ComingSoon />
      },
      {
        path: '/offers',
        element: <ComingSoon />
      },
      {
        path: '/contact',
        element: <ComingSoon />
      },
      {
        path: '/about',
        element: <ComingSoon />
      },
    ]
  },
]);