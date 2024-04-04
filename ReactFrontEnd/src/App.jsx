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
          {/* <Route path="/createreview" element={<CreateReview />} /> */}
          {/* <Route path="/parksearch" element={<ParkSearch />} /> */}
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/itinerary" element={<Itinerary />} />          <Route path = "/parksearch" element = {<ParkSearch />} >
            <Route path = "/parksearch/search" element = {<SearchList />} />
          </Route>        </Routes>
      </BrowserRouter>
      </AppProvider>
    </>

    // <>
    
    //   <Home />
    //   <ParkSearch />
    //   <Favorites />
    //   <Itinerary />
    //   <SearchList />

    // </>

    // <>
    //   <Header />
    //   <Slideshow />
    //   <h1>THIS IS THE HOME PAGE</h1>
    // </>
    // <AppProvider>
    // <BrowserRouter>
    //   <Routes>
    //     <Route index element={<Home />} />
    //     <Route element={<ParkSearch />} />
    //     <Route element={<Favorites />} />
    //     <Route element={<Itinerary />} />
    //     <Route element={<SearchList />} />
    //   </Routes>
    // </BrowserRouter>
    // </AppProvider>

  )
}

export default App
