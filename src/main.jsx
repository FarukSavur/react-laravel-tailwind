import * as React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Pages/Layout/Index";
import Home from "./Pages/Static/Home";
import FlowPhotos from "./Pages/FlowPhotos/Index";

import './css/style.css'
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "giris-yap",
        element: <Login />,
      },
      {
        path: "kayit-ol",
        element: <Register />,
      },
      {
        path: 'akis-fotograflar',
        element: <FlowPhotos />
      }
      // {
      //   element: <AuthLayout />,
      //   children: [
      //     {
      //       path: "login",
      //       element: <Login />,
      //     },
      //     {
      //       path: "logout",
      //       action: logoutUser,
      //     },
      //   ],
      // },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);