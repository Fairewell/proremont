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

const router = createBrowserRouter([
  {
    path: "/",
    element: <AnimatedPage><Root/></AnimatedPage>,
  },
  {
    path: "/main",
    element: <AnimatedPage><Root/></AnimatedPage>,
  },
  {
    path: "/product",
    element: <AnimatedPage><ServicePage /></AnimatedPage>,
  },
  {
    path: "/about",
    element: <AboutPage/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
