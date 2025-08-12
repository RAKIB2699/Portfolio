import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayOut from './MainLayOut/MainLayOut.jsx';
import Home from './Home/Home.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayOut,
    children:[
      {
        index: true,
        Component : Home
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
