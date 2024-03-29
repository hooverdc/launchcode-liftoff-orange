package com.nationalParkApp.demo.service;

import com.nationalParkApp.demo.model.Review;

import java.util.List;

public interface ReviewService {
    Review createReview(Review review);

    List<Review> getAllReviews();

    boolean deleteReview(Long id);

    Review getReviewById();

    Review getReviewById(Long id);

    Review updateReview(Long id, Review review);
}
