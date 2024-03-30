package com.nationalParkApp.demo.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity
@EqualsAndHashCode(callSuper = true)
@Data
@NoArgsConstructor
@Table(name="users")
public class User extends AbstractEntity {

    private String username;
    private String password;
    private int enabled;

}