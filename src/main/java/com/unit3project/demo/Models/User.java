package com.unit3project.demo.Models;

import jakarta.persistence.Entity;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;


@Entity
public class User extends AbstractEntity{

    @NotBlank
    private String userName;

    @Override
    public int hashCode() {
        return super.hashCode();
    }
//@Email
    //private String email;

    @NotBlank
    private String pwHash;

    public User() {}

    public User(String userName, String pwHash) {
        this.userName = userName;
        this.pwHash = pwHash;
    }

    private static final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    public boolean isMatchingPassword(String password) {
        return encoder.matches(password, pwHash);
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public void setPwHash(String pwHash) {
        this.pwHash = pwHash;
    }

    //public String getEmail() {
    //    return email;
    //}

    //public void setEmail(String email) {
    //    this.email = email;
    //}
}
