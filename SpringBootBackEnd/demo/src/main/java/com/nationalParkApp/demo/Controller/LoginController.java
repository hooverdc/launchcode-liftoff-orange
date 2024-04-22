package com.nationalParkApp.demo.Controller;

import com.nationalParkApp.demo.Model.User;
import com.nationalParkApp.demo.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
public class LoginController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/register")
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

    @RequestMapping("/user")
    public User loginUser (@RequestBody User user) {
        return userRepository.findByUsername(user.getUsername());
        }

}
