package com.yogaApp.YogaVibe.Services;

import java.util.List;

import com.yogaApp.YogaVibe.Models.Yoga;

public interface FavoriteService {

    void addFavorite(Long yogaId);

    void removeFavorite(Long yogaId);

    List<Yoga> getFavorites();

    boolean isFavorite(Long yogaId);
}
