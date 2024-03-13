package com.unit3project.demo.Models;

import jakarta.persistence.Entity;
import jakarta.validation.constraints.Email;

@Entity
public class User extends AbstractEntity{

    private String userName;

    @Email
    private String email;

    private String hashWord;

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
