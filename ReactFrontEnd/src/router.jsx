import Itinerary from './Components/Itinerary.jsx'
import ParkSearch from './Components/ParkSearch.jsx'
import Home from './Components/Home.jsx'
import Favorites from './Components/Favorites.jsx'
import App from './App.jsx'
import ErrorPage from './Components/ErrorPage.jsx'
import Register from './Components/Register.jsx'
import Header from './Components/Header.jsx'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  
    // { path: "/", element: <App /> },
    // { path: "/", element: <Header />, errorElement: <ErrorPage />,
    //   children: [
    //     { path: "register", element: <Register /> },
    //     { path: "parksearch", element: <ParkSearch /> },
    //     { path: "/favorites", element: <Favorites />},
    //     { path: "/itinerary", element: <Itinerary /> },
    //   ],
  
    // },
    
    
  ]); 