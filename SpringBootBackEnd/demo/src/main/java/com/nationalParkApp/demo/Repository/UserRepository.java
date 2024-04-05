package com.nationalParkApp.demo.Repository;

import com.nationalParkApp.demo.Model.User;
import jakarta.persistence.Id;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Id> {

    User findByUsername(String username);
}
