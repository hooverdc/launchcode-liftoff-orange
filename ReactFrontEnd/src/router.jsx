//import Itinerary from './Components/Itinerary.jsx'
import ParkSearch from './Components/ParkSearch.jsx'
//import Home from './Components/Home.jsx'
//import Favorites from './Components/Favorites.jsx'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
   
  
    { path: "/", element: <App /> },
    // { path: "/home", element: <Home /> },
    { path: "/parksearch", element: <ParkSearch /> },
    // { path: "/favorites", element: <Favorites />},
    // { path: "/itinerary", element: <Itinerary /> },
  
  ]); 