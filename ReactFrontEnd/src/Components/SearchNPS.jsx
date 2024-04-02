import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

const baseURL = "https://developer.nps.gov/api/v1";
const api_key=import.meta.env.VITE_REACT_APP_NPS_API_KEY;


function SearchNPS() {
    const [ parks, setParks ] = useState([]);
    const [ searchTerm, setSearchTerm ] = useState('');
    
    const getParks=()=> {
        axios.get(baseURL+"/parks?limit=50&q=%22+%22"+searchTerm+"%22+%22&api_key="+api_key).then((response) => setParks(response.data.data))
    }

    function handleSubmit(e) {
        getParks();
        e.preventDefault();
    }

    const handleChange = (e) => {
        setSearchTerm(e.target.value)
    }

    return (

        <div>
            <form onSubmit={handleSubmit} className="bg-gray-500 m-28 rounded-md">
                <p id="parkSearch">Park Search</p>
                <div className="flex space-x-4">
                    <label>Search:
                        <input 
                        type="text" 
                        id="searchTerm"
                        name="searchTerm"
                        value={searchTerm} 
                        placeholder="Yellowstone Park..." 
                        className="mx-2"
                        onChange={handleChange}
                        >
                        </input>
                    </label>

                </div>

                <div>
                    <button type="submit" className="bg-green-500">Search</button>
                </div>

            </form>

            <div className="grid grid-cols-2">
                {parks.map((park, index) => {
                return (
                    <div key={index} className=" bg-gray-300 p-8 gap-10 rounded-lg">
                       
                        {/* <div>{park.parkCode}</div> */}
                        <img className="rounded-xl my-4" src={park.images[0].url} />
                        
                        <div className="text-center"> 
                            <a className="underline underline-offset-2" href={park.url}>{park.fullName}</a>             
                        </div>
                        {/* change this link to details template page */}
                        <div className="container text-center"> 
                            {park.activities.map((activity, index) => {
                                return (
                                    " *"+activity.name 
                                ) 
                            })}
                        </div>
                        <div className="text-center">States: {park.states}</div>
                    
                    </div>)
                })}    
            </div>      

        </div> 
    )

}

export default SearchNPS




