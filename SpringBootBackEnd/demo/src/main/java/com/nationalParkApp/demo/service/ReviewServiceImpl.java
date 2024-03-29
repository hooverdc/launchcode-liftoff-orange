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
}
