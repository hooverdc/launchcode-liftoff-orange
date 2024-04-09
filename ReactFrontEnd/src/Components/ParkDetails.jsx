import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios';
import Header from './Header';
import { useGlobalContext } from '../context';
import { Carousel } from 'flowbite-react';

const getParkInfoURL="https://developer.nps.gov/api/v1/parks?parkCode="
const api_key=import.meta.env.VITE_REACT_APP_NPS_API_KEY;



function ParkDetails() {
    const [park, setPark] = useState([]);
    const { parkCode } =  useParams()
    const { searches } = useGlobalContext();

    const singlePark = searches.find(park => park.parkCode === useParams().parkCode)

const navigate = useNavigate();   
    
  return (
    <>

    <Header />
    <div name="details" className="bg-gray-500 pt-10 pb-20 mt-10 mx-10 mb-20 rounded-md">
        <div name="title">
            <div><h1 className="underline underline-offset-4 px-5 py-5">{singlePark.fullName}</h1></div>
            
            <div name="designation" className="flex px-2">
                <div className="underline underline-offset-2 px-3">Designation: </div>
                <div>{singlePark.designation}</div>
            </div>
            
            <div name="states" className="flex px-2">
                <div className="underline underline-offset-2 px-3">States:</div>
                <div>{singlePark.states}</div>
            </div>
        </div>

        <div name="images">
            <Carousel slide={false} className="h-96 px-10 my-10">
                {singlePark.allImages.map((image, idx) => (
                <img key={idx} src={image.url} className=""/>
                ))}
            </Carousel>
        </div>    
            
        
        <div name="description" className="px-40 py-10">{singlePark.description}</div>
        <div name="weather" className="px-40 py-10"><p className="underline underline-offset-2">Weather: </p>{singlePark.weather}</div>
        
        <div name="activities" className="px-40 py-10"> 
            <p className="underline underline-offset-2">Activities:</p>
            {singlePark.activities.map((activity) => {
            return activity.name + ", "
            })}
        </div>
        <div name="button group" className="flex justify-center">
            <button className="mx-20 bg-green-700 hover:bg-green-900 font-semibold text-amber-950">Favorite</button>
            <button className="mx-20 bg-green-700 hover:bg-green-900 font-semibold text-amber-950"
            onClick={() => navigate("/createreview")}
            >Add Review</button>
            <button className="mx-20 bg-green-700 hover:bg-green-900 font-semibold text-amber-950">Plan Your Visit</button>

        </div>

        


    </div>
    
    </>

  )
}

export default ParkDetails