package com.yogaApp.YogaVibe.Services.Impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.yogaApp.YogaVibe.Models.Yoga;
import com.yogaApp.YogaVibe.Services.FavoriteService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class FavoriteServiceImpl implements FavoriteService {
    
    @Override
    public void addFavorite(Long yogaId) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'addFavorite'");
    }

    @Override
    public void removeFavorite(Long yogaId) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'removeFavorite'");
    }

    @Override
    public List<Yoga> getFavorites() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getFavorites'");
    }

    @Override
    public boolean isFavorite(Long yogaId) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'isFavorite'");
    }
    
}
