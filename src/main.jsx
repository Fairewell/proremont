import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import Root from "./routes/root";
import './index.css';
import ErrorPage from './components/ErrorPage';
import ServicePage from './routes/Servicespage';
import AnimatedPage from './routes/AnimatePage';
import AboutPage from './routes/About';
import NotFoundPage from './routes/NotFound';

const router = createBrowserRouter([
  {
    path: "/",
    element: <AnimatedPage><Root/></AnimatedPage>,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/main",
    element: <AnimatedPage><Root/></AnimatedPage>,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/product",
    element: <AnimatedPage><ServicePage/></AnimatedPage>,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/about",
    element: <AboutPage/>,
    errorElement: <NotFoundPage />,
  },
  {
    errorElement: <NotFoundPage />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
