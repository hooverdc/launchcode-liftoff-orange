import Itinerary from './Components/Itinerary.jsx'
import ParkSearch from './Components/ParkSearch.jsx'
import Home from './Components/Home.jsx'
import Favorites from './Components/Favorites.jsx'
//import App from './App.jsx'
import { createBrowserRouter } from 'react-router-dom';
import SearchList from './Components/SearchList.jsx'

export const router = createBrowserRouter([
   
  
    // { path: "/", element: <App /> },
    { path: "/", element: <Home /> },
    { path: "/parksearch", element: <ParkSearch /> },
    { path: "/favorites", element: <Favorites />},
    { path: "/itinerary", element: <Itinerary /> },
    { path: "/parksearch/searchlist", element: <SearchList /> },

  ]); 