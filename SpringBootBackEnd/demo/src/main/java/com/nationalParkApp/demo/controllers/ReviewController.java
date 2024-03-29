package com.nationalParkApp.demo.controllers;

import com.nationalParkApp.demo.model.Review;
import com.nationalParkApp.demo.service.ReviewService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/")
public class ReviewController {

    private ReviewService reviewService;

    public ReviewController(ReviewService reviewService) {
        this.reviewService = reviewService;
    }

    @PostMapping("/createreview")
    public Review createReview(@RequestBody Review review) {
        return reviewService.createReview(review);
    }

    @GetMapping("/?")
    public List<Review> getAllReviews() {
        return reviewService.getAllReviews();
    }
}
