import React from 'react'
import { Link } from 'react-router-dom'
import Slideshow from './Slideshow'
import Header from './Header'
import { queryClient } from '../main'

function Itinerary() {

//used for react query testing
// const data = queryClient.getQueryData(["someparks"])
// const singlePark = queryClient.getQueryData(["singlePark"])
// // const parksFound = queryClient.getQueryData(['parksFound'])
// console.log("HERE IS THE REACT QUERY CACHED DATA FROM HOME")
// console.log(data)
// console.log("HERE IS THE REACT QUERY CACHED DATA FROM PARK DETAILS")
// console.log(data)
  
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