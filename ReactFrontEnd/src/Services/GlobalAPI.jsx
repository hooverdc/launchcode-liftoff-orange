{/* KW - 3/23/24 */}
/* API INFO BELOW 

###########
note the reference to the API KEY, stored as const api_key. Best practices 
dictate keeping API key secure. You must create a new file in the root
folder of the project called ".env". In that file, in the first line
type in: 
"VITE_REACT_APP_NPS_API_KEY=" 
(no quotes)
After the "=", paste in the API key (no ';' or anything is needed at the
end of the line). Then be sure to add "*.env" to the .gitignore, so that
our API key doesn't end up on github in plain-text.
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
    getImages,getParks
}
