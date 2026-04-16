package com.yogaApp.YogaVibe.Services.Impl;

import java.util.List;
import java.util.Locale.Category;

import org.springframework.stereotype.Service;

import com.yogaApp.YogaVibe.Services.CategoryService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CategoryServiceImpl implements CategoryService {
    
    @Override
    public List<Category> getAllCategories() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getAllCategories'");
    }

    @Override
    public Category getCategoryById(Long id) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getCategoryById'");
    }
    
}
