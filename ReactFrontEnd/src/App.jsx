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


// ### ORIGINAL BEFORE ROUTER ###
// This page is being used as "home" page

function App() {
  return (

    <>
    <AppProvider>
    <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/createreview" element={<CreateReview />} />
          {/* <Route path="/parksearch" element={<ParkSearch />} /> */}
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/itinerary" element={<Itinerary />} /> 
          <Route path="/register" element={<Register />} />
          <Route path = "/parksearch" element = {<ParkSearch />} >
            <Route path = "search" element = {<SearchList />} />
          </Route> 
          <Route path="/parksearch/search/:parkcode" element={<ParkDetails/>} />

        </Routes>
      </BrowserRouter>
      </AppProvider>
    </>

  )
}

export default App
