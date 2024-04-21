import axios from "axios";

const ITINERARY_API_BASE_URL = "http://localhost:8080/api/v1/itinerary";

class ItineraryServices {
  CreateItinerary(itinerary) {
    return axios.post(ITINERARY_API_BASE_URL, itinerary);
  }

  GetAllReviews() {
    return axios.post(ITINERARY_API_BASE_URL);
  }
}

export default new ItineraryServices();