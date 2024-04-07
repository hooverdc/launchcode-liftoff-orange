import React from 'react'
import { Link } from 'react-router-dom'
import Slideshow from './Slideshow'
import Header from './Header'
import { queryClient } from '../main'

function Itinerary() {

  // const data = queryClient.getQueryData(['someparks'])
  // const parksFound = queryClient.getQueryData(['parksFound'])
  
  return (
    <>
        <Header />
        {/* <Slideshow /> */}
        <h1>THIS IS THE ITINERARY PAGE</h1>
        {/* {console.log("IMPORT PARKS INFO")}
        {console.log(data)}
        {console.log(parksFound)} */}
    </>
  )
}

export default Itinerary