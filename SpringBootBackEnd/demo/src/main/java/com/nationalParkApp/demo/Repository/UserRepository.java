package com.nationalParkApp.demo.Repository;

import com.nationalParkApp.demo.Model.Customer;
import jakarta.persistence.Id;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<Customer, Id> {

    Customer findByUsername(String username);
}
