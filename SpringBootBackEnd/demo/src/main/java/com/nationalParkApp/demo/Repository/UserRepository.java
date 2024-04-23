package com.nationalParkApp.demo.Repository;

import com.nationalParkApp.demo.Model.User;
import com.nationalParkApp.demo.entity.FavoritesEntity;
import com.nationalParkApp.demo.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Long> {

    User findByUsername(String username);

}
