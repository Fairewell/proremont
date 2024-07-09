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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    
  },
  {
    path: "product/",
    element: <ServicePage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
