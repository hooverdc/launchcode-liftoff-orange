import React from 'react'
import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Home from './Components/Home';
import Itinerary from './Components/Itinerary';
import SearchNPS from './Components/SearchNPS'
import Favorites from './Components/Favorites';
import Register from './Components/Register'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ErrorPage from './Components/ErrorPage'



// ### ORIGINAL BEFORE ROUTER ###
// This page is being used as "home" page

function App() {
  return (
    
    <>
    {/* <BrowserRouter> 
      <Routes>
        <Route index element={<Header />} />
        <Route element={<ParkSearch />} />
        <Route element={<Favorites />} />
        <Route element={<Register />} />
      </Routes>
    </BrowserRouter> */}

    
      <BrowserRouter>
        <Routes>
            {/* <Route index element={<Home />} /> */}
            <Route path="/" element={<Header />} errorElement={<ErrorPage />} 
            children={[
              <Route index element={<Home />} />,
              <Route path="parksearch" element={<SearchNPS />} />,
              <Route path="favorites" element={<Favorites />} />,
              <Route path="itineraty" element={<Itinerary />} />,
              <Route path="register" element={<Register />} />,
            ]} >
            </Route>
            {/* <Route path="/createreview" element={<CreateReview />} /> */}     
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App
