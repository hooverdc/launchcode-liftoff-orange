import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";
const URL = "https://developer.nps.gov/api/v1";
const api_key="Wrk46hd2qqrRis6VpJA8CT12EeDczzGa9dYRBjYk"


const AppContext = React.createContext();

 const AppProvider = ({children}) => {
     const [searchTerm, setSearchTerm] = useState("yellowstone");
     const [searches, setSearch] = useState([]);
     const [resultName, setResultName] = useState("");

     const fetchSearches = useCallback(async() => {
         
        try{
    
            const response = await fetch(URL+"/parks?limit=50&q="+searchTerm+"&api_key="+api_key);
            const changeName = await response.json();
            const {data} = changeName;

            console.log(data);

            if(data){
                const newSearch = data.map((searchSingle) => {
                    const {parkCode, fullName, states, activities, images} = searchSingle; 

                    return {
                        parkCode: parkCode, //this is suposed to help me with the park details page
                        fullName: fullName,
                        states: states,
                        activities: activities,
                        cover_id: images[0].url
                    }
                });

                setSearch(newSearch);

                if(newSearch.length > 1){
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
     }, [searchTerm]);

    useEffect(() => {
        fetchSearches();
    }, [searchTerm, fetchSearches]);

    return (
        <AppContext.Provider value = {{
             searches, setSearchTerm, resultName, setResultName,
        }}>
            {children}
        </AppContext.Provider>
    )
 }

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext, AppProvider};