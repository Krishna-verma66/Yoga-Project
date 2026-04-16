package com.yogaApp.YogaVibe.Services.Impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.yogaApp.YogaVibe.Models.Yoga;
import com.yogaApp.YogaVibe.Services.YogaService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class YogaServiceImpl implements YogaService {
    
    @Override
    public List<Yoga> getAllYoga() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getAllYoga'");
    }

    @Override
    public Yoga getYogaById(Long id) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getYogaById'");
    }

    @Override
    public List<Yoga> getYogaByCategory(Long categoryId) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getYogaByCategory'");
    }

    @Override
    public List<Yoga> searchYoga(String keyword) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'searchYoga'");
    }

    @Override
    public List<Yoga> getRecommendedYoga(Long userId) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getRecommendedYoga'");
    }


}
