package com.unit3project.demo.Models.DTO;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class RegisterDTO extends LogInDTO {

    @NotBlank(message = "Username is required")
    @Size(min = 6, max = 30, message = "Username must be 6-30 character long")
    private String verifyPassword;

    public String getVerifyPassword() {
        return verifyPassword;
    }

    public void setVerifyPassword(String verifyPassword) {
        this.verifyPassword = verifyPassword;
    }
}
