import React from 'react'
import axios from 'axios'

const REVIEW_API_BASE_URL = "http://localhost:8080/api/v1/createreview"

class ReviewService {
    saveReview(review) {
        return axios.post(REVIEW_API_BASE_URL, review)
    }
}