import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const parkBaseURL="https://developer.nps.gov/api/v1"
const getParkInfoURL="https://developer.nps.gov/api/v1/parks?parkCode="
const api_key=import.meta.env.VITE_REACT_APP_NPS_API_KEY;

//parks?parkCode=arch&api_key=Wrk46hd2qqrRis6VpJA8CT12EeDczzGa9dYRBjYk

//finds x # ('num') of pictures by string ('searchTerm')
let searchTerm = 'overlook';
let num = 5;
const getImages=axios.get(parkBaseURL+"/multimedia/galleries/assets?limit="+num+"&q="+searchTerm+"&api_key="+api_key);

//finds park by parkCode ('parkCode')
let parkCode = "arch";
const getParks=axios.get(getParkInfoURL+parkCode+"&api_key="+api_key);


// const carouselPics = useQuery({
//     queryKey: ["getParks"],
//     staleTime: 1200000,
//     queryFn: axios.get(getParkInfoURL+"arch"+"&api_key="+api_key)
// })


export default {
    getImages,getParks,
}
