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
//import { router } from './router';

//### ORIGINAL ###
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )



// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AppProvider } from './context'
import SearchList from './Components/SearchList'


// const root = ReactDOM.createRoot(document.getElementById('root')).render(
 
//   <AppProvider>
//   <BrowserRouter>
//     <Routes>
//         <Route path= "/" element= { <Home /> } />
//         <Route path= "/favorites" element= {<Favorites />} />
//         <Route path= "/itinerary" element= { <Itinerary /> } />
//         <Route path = "/parksearch" element = {<ParkSearch />} >
//         <Route path = "/parksearch/search" element = {<SearchList />} /> 
//         </Route>
//     </Routes>
//   </BrowserRouter>
//   </AppProvider>
//)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
) 