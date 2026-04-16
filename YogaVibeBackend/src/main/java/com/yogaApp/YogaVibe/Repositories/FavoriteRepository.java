package com.yogaApp.YogaVibe.Repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.yogaApp.YogaVibe.Models.Favorite;

public interface FavoriteRepository extends JpaRepository<Favorite, Long> {

    List<Favorite> findByUserId(Long userId);
    Optional<Favorite> findByUserIdAndYogaId(Long userId, Long yogaId);

}
