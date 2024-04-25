package com.nationalParkApp.demo.Controller;

import com.nationalParkApp.demo.Model.Review;
import com.nationalParkApp.demo.service.ReviewService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/v1/")
public class ReviewController {

    private ReviewService reviewService;

    public ReviewController(ReviewService reviewService) {
        this.reviewService = reviewService;
    }

    @PostMapping("/review")
    public Review createReview(@RequestBody Review review) {
        return reviewService.createReview(review);
    }

    @GetMapping("/review")
    public List<Review> getAllReviews() {
        return reviewService.getAllReviews();
    }

    @GetMapping("/review/user{id}")
    public List<Review> getAllReviewsByUserId(@PathVariable Long id) {
        return reviewService.getAllReviewsByUserId(id);
    }

    @GetMapping("/review/parkcode{id}")
    public List<Review> getAllReviewsByParkCode(@PathVariable Long id) { return reviewService.getAllReviewsByUserId(id); }

    @GetMapping(path = "/review{id}")
    public ResponseEntity<Review> getReviewById(@PathVariable Long id) {
        Review review = null;
        review = reviewService.getReviewById(id);
        return ResponseEntity.ok(review);
    }

    @DeleteMapping(path = "/review/{id}")
    public ResponseEntity<Object> deleteReview(@PathVariable Long id) {
        boolean deleted = false;
        deleted = reviewService.deleteReview(id);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", deleted);
        return ResponseEntity.ok(response);
    }

    @PutMapping(path = "/review/{id}")
    public ResponseEntity<Review> updateReview(@PathVariable Long id, @RequestBody Review review) {
        review = reviewService.updateReview(id, review);
        return ResponseEntity.ok(review);
    }
}
