import Header from './Header'
import { queryClient } from '../main'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import ItineraryServices from '../Services/ItineraryServices'

function Itinerary() {

//used for react query testing
// const data = queryClient.getQueryData(["someparks"])
// const singlePark = queryClient.getQueryData(["singlePark"])
// // const parksFound = queryClient.getQueryData(['parksFound'])
// console.log("HERE IS THE REACT QUERY CACHED DATA FROM HOME")
// console.log(data)
// console.log("HERE IS THE REACT QUERY CACHED DATA FROM PARK DETAILS")
// console.log(data)

const [startDate, setStartDate] = useState(new Date());

const [endDate, setEndDate] = useState(new Date());

const [itinerary, setItinerary] = useState({
  id: "",
  startDate: new Date(),
  endDate: new Date(),
  stayLength: "",
});

const navigate = useNavigate();

const handleChange = (name, date) => {
  
  setItinerary({...itinerary, [name]: date})
};

const saveItinerary = (e) => {
  e.preventDefault();
  ItineraryServices.CreateItinerary(itinerary)
    .then((response) => {
      console.log(response)
      navigate("/home")
    })
    .catch((error) => {
      console.log(error)
    });
  };

  const reset = (e) => {
    e.preventDefault();
    setItinerary({
      id: "",
      startDate: new Date(),
      endDate: new Date(),
    });
  };
  
  return (
    <>
        <Header />
        {/* <Slideshow /> */}
        <h1>THIS IS THE ITINERARY PAGE</h1>
        {/* {console.log("IMPORT PARKS INFO")}
        {console.log(data)}
        {console.log(parksFound)} */}

      <div>
              <div>
                <h1 className='font-semibold'>Create Itinerary for ?</h1>
              </div>
              <div>
                <p className='font-semibold'>Trip Start date:</p>
                <DatePicker
                  showIcon
                  toggleCalendarOnIconClick
                  selected={itinerary.startDate}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                  onChange={(date) => handleChange('startDate', date)}
                  name='startDate'
                />
              </div>
              <div>
                <p className='font-semibold'>Trip End date:</p>
                <DatePicker
                  showIcon
                  toggleCalendarOnIconClick
                  selected={itinerary.endDate}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  minDate={startDate} 
                  onChange={(date) => handleChange('endDate', date)}
                  name='endDate'
                />
              </div>
              <div className="flex justify-center space-x-10 pt-6">
              <button className=" bg-green-700 hover:bg-green-900 font-semibold text-amber-950"
                onClick={saveItinerary} >
                Submit
              </button>

              <button className="bg-red-700 hover:bg-red-900 font-semibold text-amber-950" 
                onClick={reset}>
                Reset
              </button>
            </div>
      </div>

    </>
  )
}

export default Itinerary