package com.unit3project.demo.Models.Data;

;
import com.unit3project.demo.Models.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository <User, Integer> {
    User findByUserName(String userName);
}