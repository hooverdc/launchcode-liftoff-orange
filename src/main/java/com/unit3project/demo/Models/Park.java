package com.unit3project.demo.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.ManyToMany;

import java.util.ArrayList;
import java.util.List;

@Entity
public class Park extends AbstractEntity{

    //@ManyToMany
    private List<User> users = new ArrayList<>();

    private List<String> location = new ArrayList<>();

    //@OneToMany
    private List<Fee> fees = new ArrayList<>();
    private List<String> activities = new ArrayList<>();

    private List<String> amenities = new ArrayList<>();

    //@OneToMany
    private List<Review> reviews = new ArrayList<>();

    //needs properties, getters/setters, many-to-many w/ user,
}
