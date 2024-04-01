package com.nationalParkApp.demo.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity
@EqualsAndHashCode(callSuper = true)
@Data
@Table(name="customers")
public class Customer extends AbstractEntity {

    private String username;
    private String password;
    private String role;


}