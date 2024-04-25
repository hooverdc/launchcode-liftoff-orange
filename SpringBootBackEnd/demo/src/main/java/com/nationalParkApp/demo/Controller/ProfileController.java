package com.nationalParkApp.demo.Controller;

import com.nationalParkApp.demo.Model.User;
import com.nationalParkApp.demo.Repository.UserRepository;
import com.nationalParkApp.demo.entity.UserEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/v1/")
public class ProfileController {

    @Autowired
    private UserRepository userRepository;

    // Endpoint for updating user profile
    @PutMapping("update/{id}")// put request to that url
    public ResponseEntity<String> updateUserProfile(@PathVariable Long id, @RequestBody User updatedUser) {
        Optional<UserEntity> optionalUserEntity = userRepository.findById(id);
        if (optionalUser.isPresent()) {
            UserEntity userEntity = optionalUser.get();
            // Updates username and password
            userEntity.setUsername(updatedUser.getUsername());
            userEntity.setPassword(UpdatedUser.getPassword());
            userRepository.save(userEntity); // suppose to save updated user
            return ResponseEntity.ok("Profile updated successfully");
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // this is the endpoint for deleting an account
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteUserAccount(@PathVariable Long id) {
        Optional<UserEntity> optionalUser = userRepository.findById(id);
        if (optionalUserEntity.isPresent()) {
            userRepository.deleteById(id); // Deletes user
            return ResponseEntity.ok("Account deleted successfully");
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}


//    // Update user endpoint
//    @PutMapping("/user/{id}")
//    public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User user) {
//        user = userService.updateUser(id, user);
//        return ResponseEntity.ok(user);
//    }


//    // Delete endpoint
//    @DeleteMapping("/user/{id}")
//    public ResponseEntity<String> deleteUser(@PathVariable Long id) {
//        userService.deleteUser(id);
//        return ResponseEntity.ok("Account deleted successfully");
//    }
//
//
//
//
//    // To update user
//    @Override
//    public User updateUser(Long id, User user) {
//        UserEntity userEntity = userRepository.findById(id).orElseThrow(() -> new RuntimeException("User not found"));
//        userEntity.setUsername(user.getUsername());
//        userEntity.setPassword(user.getPassword());
//        userRepository.save(userEntity);
//        return user;
//    }
//
//
//    // Delete user method
//    @Override
//    public void deleteUser(Long id) {
//        userRepository.deleteById(id);
//    }


}
