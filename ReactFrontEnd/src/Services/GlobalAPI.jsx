{/* KW - 3/23/24 */}
/* API INFO BELOW 

###########
note the reference to the API KEY, stored as const api_key. Be sure to 
uncomment the last line in .gitignore so file ".env" isnt pushed
###########

*/

import axios from "axios";

const parkBaseURL="https://developer.nps.gov/api/v1"
const api_key=import.meta.env.VITE_REACT_APP_NPS_API_KEY;

//parks?parkCode=arch&api_key=Wrk46hd2qqrRis6VpJA8CT12EeDczzGa9dYRBjYk




//finds x # ('num') of pictures by string ('searchTerm')
let searchTerm = 'overlook';
let num = 5;
const getImages=axios.get(parkBaseURL+"/multimedia/galleries/assets?limit="+num+"&q="+searchTerm+"&api_key="+api_key);

//finds park by parkCode ('parkCode')
let parkCode = "arch";
const getParks=axios.get(parkBaseURL+"/parks?parkCode="+parkCode+"&api_key="+api_key);

export default{
    getImages,getParks,
}
