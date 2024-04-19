package com.nationalParkApp.demo.service;

import com.nationalParkApp.demo.Model.Favorites;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface FavoritesService {

    Favorites addToFavorites(Favorites favorites);

    boolean deleteFromFavorites(Long id);

    List<Favorites> getAllFavorites();

    Favorites getFavoritesById(Long id);
}