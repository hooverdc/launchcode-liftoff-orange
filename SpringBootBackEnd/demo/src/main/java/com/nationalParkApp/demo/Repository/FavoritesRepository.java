package com.nationalParkApp.demo.Repository;

import com.nationalParkApp.demo.entity.FavoritesEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FavoritesRepository extends JpaRepository<FavoritesEntity, Long> {
}
