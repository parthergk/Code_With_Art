import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import store from "./redux/store";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Main from './Component/Main';
import Head from './Component/Header/Head';


const Projects = React.lazy(() => import("./Component/Project/Projects"));
const Blogs = React.lazy(() => import("./Component/Blog/Blogs"));
const About = React.lazy(() => import("./Component/About"));


const AppLayout = () => {
  return (
      <Provider store={store}>
        <Head />
        <Outlet />
      </Provider>
  );
};


// Create browser router with routes
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/project",
        element: <Suspense><Projects /></Suspense>,
      },
      {
        path: "/blog",
        element: <Suspense><Blogs /></Suspense>,
      },
      {
        path: "/about",
        element: <Suspense><About /></Suspense>,
      },
    ],
  },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
