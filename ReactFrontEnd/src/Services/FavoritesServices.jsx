import React from "react";
import axios from "axios";

const FAVORITES_BASE_API_URL = "http://localhost:8080/api/v1/favorites";

class FavoritesServices {
  createFavorite(favorites) {
    return axios.post(FAVORITES_BASE_API_URL, favorites);
  }

  getFavorites() {
    return axios.get(FAVORITES_BASE_API_URL);
  }

  getFavoritesByUserId(id) {
    return axios.get(FAVORITES_BASE_API_URL + "/" + "user" + "/" + id);
  }

  deleteFavorites(id) {
    return axios.delete(FAVORITES_BASE_API_URL + "/" + id);
  }
}

export default new FavoritesServices();
