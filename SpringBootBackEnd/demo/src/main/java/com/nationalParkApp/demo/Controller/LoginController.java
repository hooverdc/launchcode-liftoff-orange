package com.nationalParkApp.demo.Controller;

import com.nationalParkApp.demo.Model.User;
import com.nationalParkApp.demo.Repository.UserRepository;
import com.nationalParkApp.demo.entity.UserEntity;
import com.nationalParkApp.demo.service.UserService;
import com.nationalParkApp.demo.service.UserServiceImpl;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
public class LoginController {

    private UserService userService;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody User user) {
        UserEntity savedUser = null;
        ResponseEntity response = null;
        try {
            String hashward = passwordEncoder.encode(user.getPassword());
            user.setPassword(hashward);
//            savedUser = (UserEntity) userRepository.save(user);
                BeanUtils.copyProperties(user, savedUser);
                userRepository.save(savedUser);
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
    public ResponseEntity<String> loginUser (@RequestBody User user) {
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body("Given user details are successfully registered");
    }
}
