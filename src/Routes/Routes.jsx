import React from "react";
import { createBrowserRouter} from 'react-router';
import Root from "../Root/Root";
import Home from "../Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import DoctorDetails from "../Pages/DoctorDetails/DoctorDetails";
import ApointList from "../Pages/ApointList/ApointList";
import Blogs from "../Pages/Blogs/Blogs";


export const router = createBrowserRouter([
    {
      path: "/",
      Component: Root,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
            index: true,
            path:'/',
            loader:()=>fetch('lawersData.json'),
            Component: Home
        },
        {
          path: 'apoint-list',
          loader: () => fetch('/lawersData.json'),
          element: <ApointList />
        },
        {
          path: 'blogs',
          loader: () => fetch('/blogsData.json'),
          Component: Blogs
        },
        {
          path:  '/doctorDetails/:id',
          loader:()=>fetch('./lawersData.json'),
          Component: DoctorDetails
        }
        
      ]
    },
  ]);