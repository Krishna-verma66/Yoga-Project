package com.yogaApp.YogaVibe.Services;

import java.util.List;
import com.yogaApp.YogaVibe.Models.Yoga;

public interface YogaService {
    
    List<Yoga> getAllYoga();

    Yoga getYogaById(Long id);

    List<Yoga> getYogaByCategory(Long categoryId);

    List<Yoga> searchYoga(String keyword);

    List<Yoga> getRecommendedYoga(Long userId);
}