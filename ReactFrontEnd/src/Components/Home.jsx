import React from 'react'
import { Link } from 'react-router-dom'
import Slideshow from './Slideshow'
import Header from './Header'
import { useQuery, useQueryClient } from "@tanstack/react-query"
import axios from 'axios'


function Home() {
  
  return (
    <>
      <Header />
      <Slideshow />
      <h1>THIS IS THE HOME PAGE</h1>
    </>
  )
}

export default Home