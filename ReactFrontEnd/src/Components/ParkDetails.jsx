import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios';
import Header from './Header';
import { useGlobalContext } from '../context';
import { Carousel } from 'flowbite-react';
import {useQuery, useQueryClient} from '@tanstack/react-query';
import { Link } from 'react-router-dom';

const getParkInfoURL="https://developer.nps.gov/api/v1/parks?parkCode="
const api_key=import.meta.env.VITE_REACT_APP_NPS_API_KEY;

function ParkDetails() {
    const [singlePark, setPark] = useState([]);
    const { parkCode } =  useParams();
    // const { searches } = useGlobalContext();

    //this sets parkId equal to the parkcode at then end of the current url
    const parkId = useParams().parkcode;

    // //below uses react query to make an API call, which is then accessible to review & itinerary pages via (['singlePark'])
    const { data, error, isLoading, status } = useQuery({
    queryKey: ["singlePark"],
    queryFn: () =>
     
        fetch("https://developer.nps.gov/api/v1/parks?parkCode="+parkId+"&api_key=Wrk46hd2qqrRis6VpJA8CT12EeDczzGa9dYRBjYk").then((res) => res.json())

    });
    
    if (error) return <div>There was an error</div>;
    if (isLoading) return <div>DATA IS LOADING...</div>

      
//#############################
//WORKING WITH FRESH API CALLS

// useEffect(() => {
//     getSinglePark();
// }, [])

    // const getSinglePark = async () => {
    //     try {
    //         const response = await axios.get("https://developer.nps.gov/api/v1/parks?parkCode="+parkId+"&api_key=Wrk46hd2qqrRis6VpJA8CT12EeDczzGa9dYRBjYk")
            // .then(response => {
                // axios.get(getParkInfoURL+parkCode+"&api_key="+api_key).then((response) => {
                    // setPark(response.data.data[0])
                    // setPark(response.data.data)
                    // console.log(singlePark)         
                    // setPark(response.data.data[0])
                    // console.log("singlePark is: " + singlePark)
                    // });     
    //     } catch (error) {
    //         console.log("Error: ", error)
    //     }
    // }
//###############################

// ###############################
    //Working, turned off for testing
    // const singlePark = searches.find(park => park.parkCode === useParams().parkCode)
    // console.log(parkCode)
    // async function getPark() {
    //     try{
    //         const response = axios.get(getParkInfoURL+parkCode+"&api_key="+api_key);
    //         console.log(response)
    //     } catch (error) {
    //         console.error(error)
    //     }
    // }
    // .then(response=>setPark(response.data.data))
//########################

  return (
    <>
    <Header />
    <div className="h-full bg-gray-400 pt-10 pb-4 mt-10 mx-10 mb-20 rounded-md">
        <div name="title" className="flex flex-col items-center">
            <div><h1 className="underline underline-offset-4 px-5 py-4">{data.data[0].fullName}</h1></div>
            <div name="designation" className="flex px-2">
                <div className="underline underline-offset-2 px-3">Designation: </div>
                <div>{data.data[0].designation}</div>
            </div>
            <div name="states" className="flex px-2">
                <div className="underline underline-offset-2 px-3">States:</div>
                <div>{data.data[0].states}</div>
            </div>
        </div>

        <div name="images" className=" h-svh">
            <Carousel slide={false} className="">
                {data.data[0].images.map((image, idx) => (
                <img key={idx} src={image.url} className=""/>
                ))}
            </Carousel>
        </div>    
        
        <div name="description" className="px-40 py-10">{data.data[0].description}</div>
        <div name="weather" className="px-40 py-10"><p className="underline underline-offset-2">Weather: </p>{data.data[0].weatherInfo}</div>
        
        <div name="activities" className="px-40 py-10"> 
            <p className="underline underline-offset-2">Activities:</p>
            {data.data[0].activities.map((activity) => {
            return activity.name + ", "
            })}
        </div>

        <div name="contact-info" className="bg-green-600  my-20 py-5 w-1/2 flex flex-col items-center mx-auto rounded-2xl">
            <div><p>Contact Info</p></div>
            <div>
                <p>place holder text</p>
                <p>place holder text</p>
                <p>place holder text</p>
            </div>
        </div>
        
        <div name="button group" className="flex justify-evenly">
            <button className="bg-yellow-300 rounded-3xl">Add to favorites</button>
            <Link to = "/createreview"><button className="bg-yellow-300 rounded-3xl">Review</button></Link>
            <Link to = "/itinerary"><button className=" bg-yellow-300 rounded-3xl">Create Itinereary</button></Link>
        </div>
    </div>
    </>
    ) 
}

export default ParkDetails