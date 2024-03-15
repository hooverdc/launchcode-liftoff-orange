package com.unit3project.demo.Controllers.api;

import com.unit3project.demo.Controllers.AuthController;
import com.unit3project.demo.Models.User;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:5173", maxAge = 3600)
@RestController
@RequestMapping("/api")
public class authApiController extends AuthController {
    @GetMapping("/user")
    public List<User> getTestList() {
        List<User> tester = new ArrayList<>();
        tester.add(new User("eric", "123456"));
        tester.add(new User("karl", "654321"));
        return tester;
    }

}
