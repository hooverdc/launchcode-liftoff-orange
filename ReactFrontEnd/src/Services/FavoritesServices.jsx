import React from "react";
import axios from "axios";

const FAVORITES_API_BASE_URL = "http://localhost:8080/api/v1/favorites";

//const FAVORITES_API_LIST_URL = "http://localhost:8080/api/v1/addFavorites";

const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: FAVORITES_API_BASE_URL,
    headers: {
    "Cache-Control": "no-cache",
    "Accept-Language": "en",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "http://localhost:5173",
    "Access-Control-Allow-Methods": "POST, GET",
    "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With",
    "Authorization": window.localStorage.getItem("Auth")
    }});




class FavoritesServices {
  createFavorite(favorites) {
    return axiosInstance.post(favorites);
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
