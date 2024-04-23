import React from 'react'
import axios from 'axios'

const REVIEW_API_BASE_URL = "http://localhost:8080/api/v1/review";

class ReviewService {
  createReview(review) {
    return axios.post(REVIEW_API_BASE_URL, review);
  }

  getReviewsByUserId(id) {
    return axios.get(REVIEW_API_BASE_URL + "/" + "user", id);
  }

  getReviewsByParkcode(parkcode) {
    return axios.get(REVIEW_API_BASE_URL + "/" + "parkcode" + parkcode);
  }

  deleteReview(id) {
    return axios.delete(REVIEW_API_BASE_URL + "/" + id);
  }
}

export default new ReviewService();