package com.unit3project.demo.Controllers.api;

import com.unit3project.demo.Controllers.AuthController;
import com.unit3project.demo.Models.DTO.LogInDTO;
import com.unit3project.demo.Models.Data.UserRepository;
import com.unit3project.demo.Models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin//(origins = "http://localhost:5173", maxAge = 3600)
@RestController
@RequestMapping("/api")
public class AuthApiController extends AuthController {



    @Autowired
    UserRepository userRepository;

    @GetMapping("/user")
    //@ResponseStatus(value= HttpStatus.OK)
    public List<User> printUser(@RequestParam("username") String username, @RequestParam("password") String password) {
        List<User> testList = new ArrayList<>();
        LogInDTO testForm = new LogInDTO();
        testForm.setUsername(username);
        testForm.setPassword(password);
        User testUser = new User(testForm.getUsername(), testForm.getPassword());
        User testUser2 = new User("karl","654321");
        testUser.setName("Eric");
        testUser2.setName("Karl");
        testList.add(testUser);
        testList.add(testUser2);
        userRepository.save(testUser);
        userRepository.save((testUser2));
        return testList;
    }

    /*@PostMapping("/user")
    public @ResponseBody String setUser() {
        User testUser =new User("eric", "123456");

         return testUser.toString();
    }*/

}
