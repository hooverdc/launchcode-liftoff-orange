import React from 'react'
import { Link } from 'react-router-dom'
import Slideshow from './Slideshow'
import Header from './Header'
import Register from './Register'
import SearchNPS from './SearchNPS'


function Home() {
  return (
    <>
        <Header />
        <Slideshow />
        <SearchNPS />


        <h1>THIS IS THE HOME PAGE</h1>
    </>
  )
}

export default Home