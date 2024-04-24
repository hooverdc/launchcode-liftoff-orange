package com.nationalParkApp.demo.Controller;

import com.nationalParkApp.demo.Model.User;
import com.nationalParkApp.demo.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/register")
    @CrossOrigin(origins = "http://localhost:5173")
    public ResponseEntity<String> registerUser(@RequestBody User user) {
        User savedUser = null;
        ResponseEntity response = null;
        try {
            String hashward = passwordEncoder.encode(user.getPassword());
            user.setPassword(hashward);
            savedUser = (User) userRepository.save(user);
            if (savedUser.getId()>0) {
                response = ResponseEntity
                        .status(HttpStatus.CREATED)
                        .body("Given user details are successfully registered");
            }
        } catch (Exception ex) {
            response = ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("AN exception occurred due to " + ex.getMessage());
        }
        return response;
    }

    @GetMapping("/profile/{username}") //new end point, getting the user profile by username, it returns user info
    @CrossOrigin(origins = "http://localhost:5173")
    public ResponseEntity<User> getUserProfile(@PathVariable String username) {
        User user = userRepository.findByUsername(username); //interacts with database, fetchs user info
        if (user != null) {
            return ResponseEntity.ok(user); //returns user object
        } else {
            return ResponseEntity.notFound().build(); //return '404 Not Found' idk if it's really nesscary
        }
    }

}
