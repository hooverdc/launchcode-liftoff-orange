import React from 'react'
import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Slideshow from './Components/Slideshow'
import Home from './Components/Home';
import Itinerary from './Components/Itinerary';
import ParkSearch from './Components/ParkSearch';
import Favorites from './Components/Favorites';
import { AppProvider } from './context';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreateReview from './Components/CreateReview'
import SearchList from './Components/SearchList'
import ParkDetails from './Components/ParkDetails'
import Register from './Components/Register'
import Footer from './Components/Footer'
import Profile from './Components/Profile'
import Login from './Components/Login'


// ### ORIGINAL BEFORE ROUTER ###
// This page is being used as "home" page

function App() {
//     //uses useState to keep the authentication status (isLoggedIn)
//   const [isLoggedIn, setIsLoggedIn] = useState(false); //????

//   // when user is loged in function is called and set to true
//   const handleLogin = () => {
//     // actually needs logic if this is what we do?
//     setIsLoggedIn(true);
//   }; //?????

//   // when user is loged out function is called and set to false
//   const handleLogout = () => {
//     // actually needs logic if this is what we do?
//     setIsLoggedIn(false);
//   };

// conditionally render routes.
// The /login route renders the Login page if the user is not logged in else profile is shown
// The /profile route renders the Profile page if the user is logged in else login page is shown

  return (

    <>
    <AppProvider>
    <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/createreview" element={<CreateReview />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/itinerary" element={<Itinerary />} /> 
          <Route path="/register" element={<Register />} />
          <Route path = "/parksearch" element = {<ParkSearch />} >
           <Route path = "search" element = {<SearchList />} />
          </Route> 
          <Route path="/parksearch/search/:parkcode" element={<ParkDetails/>} />
          <Route path="/profile" element={<Profile />}>
              {/* {isLoggedIn ? <Profile onLogout={handleLogout} /> : <Redirect to="/login" />}  */}
              {/* redirects to login page if not logged if user goes to profile*/}
          </Route>
          <Route path="/login" element={<Login />}>
              {/* {isLoggedIn ? <Redirect to="/profile" /> : <LoginPage onLogin={handleLogin} />} */}
              {/* redirects to profile page if logged in if user goes to login*/}
          </Route>
        </Routes>
      </BrowserRouter>
      </AppProvider>
      <Footer />
    </>

  )
}

export default App
