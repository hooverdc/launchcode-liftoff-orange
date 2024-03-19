import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Root from "./routes/root"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Fetch from './assets/components/Fetch'
import LogInForm from "./assets/components/LogInForm"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Fetch/>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Root/>//placement for navbar/header element
    <RouterProvider router={router} />// uses the url path to direct router to react components
  </React.StrictMode>,
)
