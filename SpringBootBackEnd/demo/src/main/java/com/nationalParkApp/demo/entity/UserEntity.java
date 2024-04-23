package com.nationalParkApp.demo.entity;

import com.nationalParkApp.demo.Model.Favorites;
import com.nationalParkApp.demo.Model.Itinerary;
import com.nationalParkApp.demo.Model.Review;
import jakarta.persistence.*;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;


@Entity
@Data
@Table(name = "user")
public class UserEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String username;

    private String password;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<ItineraryEntity> itineraries;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<ReviewEntity> reviews;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<FavoritesEntity> favorites;

}
