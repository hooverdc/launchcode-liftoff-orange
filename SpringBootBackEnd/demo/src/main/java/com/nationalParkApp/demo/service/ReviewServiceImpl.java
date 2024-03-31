package com.nationalParkApp.demo.service;

import com.nationalParkApp.demo.entity.ReviewEntity;
import com.nationalParkApp.demo.model.Review;
import com.nationalParkApp.demo.repository.ReviewRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ReviewServiceImpl implements ReviewService{

    private ReviewRepository reviewRepository;

    public ReviewServiceImpl(ReviewRepository reviewRepository) {
        this.reviewRepository = reviewRepository;
    }

    @Override
    public Review createReview(Review review) {
        ReviewEntity reviewEntity = new ReviewEntity();

        BeanUtils.copyProperties(review, reviewEntity);
        reviewRepository.save(reviewEntity);
        return review;
    }

    @Override
    public List<Review> getAllReviews() {
        List<ReviewEntity> reviewEntities = reviewRepository.findAll();

        List<Review> reviews = reviewEntities.stream().map(rev -> new Review(
                rev.getId(),
                rev.getContent()))
                .collect(Collectors.toList());
        return reviews;
    }

    @Override
    public boolean deleteReview(Long id) {
        ReviewEntity review = reviewRepository.findById(id).get();
        reviewRepository.delete(review);
        return true;
    }

    @Override
    public Review getReviewById() {
        return null;
    }

    @Override
    public Review getReviewById(Long id) {
        ReviewEntity reviewEntity = reviewRepository.findById(id).get();
        Review review = new Review();
        BeanUtils.copyProperties(reviewEntity, review);
        return review;
    }

    @Override
    public Review updateReview(Long id, Review review) {
        ReviewEntity reviewEntity = reviewRepository.findById(id).get();
        reviewEntity.setContent(review.getContent());

        reviewRepository.save(reviewEntity);
        return review;
    }
}