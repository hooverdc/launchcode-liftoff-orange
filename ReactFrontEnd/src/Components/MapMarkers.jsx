//beginning of logic for creating multiple map markers for parks with more than one address
function getLatLong() {
    const [long, setLong] = useState([]);
    const [lat, setLat] = useState([]);

    const coordURL = "https://nominatim.openstreetmap.org/search?street="+street+"&postalcode="+postalcode+"&format=json";

    axios
    .get(coordURL, 
  { headers: { 'User-Agent': 'wiegmank@gmail.com' }  } )
    .then(response => {
      
      console.log(response.data[0])
      setLong(response.data[0].lon);
      setLat(response.data[0].lat)
    })
    .catch(function(e) {
      console.log(e);
    });
   
}