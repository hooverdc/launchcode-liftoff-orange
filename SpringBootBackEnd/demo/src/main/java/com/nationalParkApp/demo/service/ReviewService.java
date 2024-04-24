package com.nationalParkApp.demo.service;

import com.nationalParkApp.demo.Model.Review;

import java.util.List;

public interface ReviewService {
    Review createReview(Review review);

    List<Review> getAllReviews();

    List<Review> getAllReviewsByParkCode(String parkCode);

    List<Review> getAllReviewsByUserId(Long id);

    boolean deleteReview(Long id);

    Review getReviewById();

    Review getReviewById(Long id);

    Review updateReview(Long id, Review review);
}
