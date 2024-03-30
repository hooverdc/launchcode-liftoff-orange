import React from 'react'
import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Slideshow from './Components/Slideshow'
import Home from './Components/Home';
import Itinerary from './Components/Itinerary';
import ParkSearch from './Components/ParkSearch';
import Favorites from './Components/Favorites';
import Register from './Components/Register'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


// ### ORIGINAL BEFORE ROUTER ###
// This page is being used as "home" page

function App() {
  return (
    // <>
    //   <Header />
    //   <Slideshow />
    //   <h1>THIS IS THE HOME PAGE</h1>
    // </>
    
    <>
    <BrowserRouter> 
      <Routes>
        <Route index element={<Header />} />
        <Route element={<ParkSearch />} />
        <Route element={<Favorites />} />
        <Route element={<Register />} />
      </Routes>
    </BrowserRouter>
    </>

  )
}

export default App
