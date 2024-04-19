import React from 'react'
import { Link } from 'react-router-dom'
import Slideshow from './Slideshow'
import Header from './Header'
import Footer from './Footer'
import { useQuery, useQueryClient } from "@tanstack/react-query"
import axios from 'axios'


function Home() {

  return (
    <>
      <div className="bg-nps-green-300 h-lvh">
        <Header />
        <Slideshow />
        <div className="flex flex-col border border-nps-green-999 rounded-xl my-10 mx-auto p-6 lg:w-1/2">
          <div className="text-center">"Welcome to Park Trippin'!</div>
          <div> Here, you'll effortlessly discover the natural wonders and serene beauty of our country's most cherished landscapes. Whether you seek rugged trails, tranquil lakes, or breathtaking vistas, embark on your next adventure with us. Start exploring, and let the journey to our nation's heart begin!</div>
        </div>
      </div>
      
    </>
  )
}

export default Home