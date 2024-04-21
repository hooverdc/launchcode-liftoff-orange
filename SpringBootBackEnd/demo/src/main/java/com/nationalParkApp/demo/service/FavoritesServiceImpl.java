package com.nationalParkApp.demo.service;

import com.nationalParkApp.demo.Model.Favorites;
import com.nationalParkApp.demo.Repository.FavoritesRepository;
import com.nationalParkApp.demo.entity.FavoritesEntity;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class FavoritesServiceImpl implements FavoritesService {

    private FavoritesRepository favoritesRepository;

    public FavoritesServiceImpl(FavoritesRepository favoritesRepository) { this.favoritesRepository = favoritesRepository; }

    @Override
    public Favorites addToFavorites(@RequestBody Favorites favorites) {
        FavoritesEntity favoritesEntity = new FavoritesEntity();

        BeanUtils.copyProperties(favorites, favoritesEntity);
        favoritesRepository.save(favoritesEntity);
        return favorites;
    }

    @Override
    public boolean deleteFromFavorites(Long id) {
        FavoritesEntity favorite = favoritesRepository.findById(id).get();
        favoritesRepository.delete(favorite);
        return false;
    }

    @Override
    public List<Favorites> getAllFavorites() {
        List<FavoritesEntity> favoritesEntities = favoritesRepository.findAll();

        List<Favorites> favorites = favoritesEntities.stream().map(fav -> new Favorites(
                        fav.getId(),
                        fav.getParkCode()))
                .collect(Collectors.toList());
        return favorites;
    }

    @Override
    public Favorites getFavoritesById(Long id) {
        FavoritesEntity favoritesEntity = favoritesRepository.findById(id).get();
        Favorites favorites = new Favorites();
        BeanUtils.copyProperties(favoritesEntity, favorites);
        return favorites;
    }
}