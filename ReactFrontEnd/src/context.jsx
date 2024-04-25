import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";
import { useQuery } from '@tanstack/react-query'
import axios from "axios";

const URL = "https://developer.nps.gov/api/v1";
const api_key=import.meta.env.VITE_REACT_APP_NPS_API_KEY;

//This allows components in the project to access and modify the global state related
//to search terms and search results obtained from the National Park Service API.



const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [searchTerm, setSearchTerm] = useState(""); //manages the search
    const [searches, setSearch] = useState([]); //search results
    const [resultName, setResultName] = useState("");
    const [stateCode, setSearchState] =useState("");
    const [activity, setActivity] = useState("");

    const fetchSearches = useCallback(
        
        async() => {
         
            try{
                    let response;
                    if(searchTerm != '') {
                    response = await fetch(URL+"/parks?statecode="+stateCode+"&limit=50&q="+searchTerm+"&api_key="+api_key);
                    } else {
                        response = await fetch(URL+"/parks?statecode="+stateCode+"&limit=50&api_key="+api_key);
                    }
            
                            
                    const changeName = await response.json();
                    const {data} = changeName;
                

                //### Tests for sessionStorage ###

                if(data){
                    const newSearch = data.map((searchSingle) => {
                        const {parkCode, fullName, states, activities, images, description, weatherInfo, designation} = searchSingle; 

                        return {
                            parkcode: parkCode, //this is suposed to help me with the park details page
                            fullname: fullName,
                            states: states,
                            activities: activities,
                            cover_id: images[0].url,
                            description: description,
                            allimages: images,
                            weather: weatherInfo,
                            designation: designation,
                        }
                    });

                    setSearch(newSearch);

                    if(newSearch.length >= 1){
                        setResultName("Your Search Result");
                    } else {
                        setResultName("No Search Result Found!")
                    }
                } else {
                    setSearch([]);
                    setResultName("No Search Result Found!");
                }


            } catch(error){
                console.log(error);
            }
        }, [searchTerm, stateCode, activity]);

    
    // useEffect triggers fetchSearches when searchTerm or fetchSearches changes.
    useEffect(() => {
        fetchSearches();
    }, [searchTerm, stateCode, activity, fetchSearches]);

    //This provides the state variables and sets to children components
    return (
        <AppContext.Provider value = {{
             searches, setSearchTerm, resultName, setResultName, stateCode, setSearchState, activity, setActivity
        }}>
            {children}
        </AppContext.Provider>
    )
 }


//this is a custom hook that accesses context values from any component within the application
export const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext, AppProvider};