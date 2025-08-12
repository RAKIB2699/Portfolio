import { Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayOut from './MainLayOut/MainLayOut.jsx';
import Home from './Home/Home.jsx';
import AboutMe from './Section/About/AboutMe.jsx';
import Skills from './Section/Skills/Skills.jsx';
import Projects from './Section/Projects/Projects.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayOut,
    children:[
      {
        index: true,
        Component : Home
      },
      // {
      //   path: "/projects",
      //   Component: Projects
      // },
      // {
      //   path : "/projects/:projectId",
      //   Component: ProjectDetails
      // }
    
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
