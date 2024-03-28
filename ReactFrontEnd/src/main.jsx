import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Home from './Components/Home'
import ParkSearch from './Components/ParkSearch';
import Favorites from './Components/Favorites';
import Itinerary from './Components/Itinerary';
//import Root from "./routes/root";
import { router } from './router';

//### ORIGINAL ###
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);