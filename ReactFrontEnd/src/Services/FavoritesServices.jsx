import axios from "axios";

const FAVORITES_API_BASE_URL = "http://localhost:8080/api/v1/favorites";

const FAVORITES_API_LIST_URL = "http://localhost:8080/api/v1/favorites";



class FavoritesService {


    addToFavorites(favorites) {
        return axios.post(FAVORITES_API_BASE_URL, favorites);
    }

    getFavorites() {
        return axios.get(FAVORITES_API_LIST_URL);     
    }
}

export default new FavoritesService();