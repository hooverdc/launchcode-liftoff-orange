import axios from "axios";

const ITINERARY_API_BASE_URL = "http://localhost:8080/api/v1/itinerary";

class ItineraryServie {
    CreateItinerary(itinerary) {
        return axios.post(ITINERARY_API_BASE_URL, itinerary);
    }
}

export default new ItineraryServie();