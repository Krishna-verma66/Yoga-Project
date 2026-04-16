package com.yogaApp.YogaVibe.Services;

import java.util.List;
import java.util.Locale.Category;

public interface CategoryService {

    List<Category> getAllCategories();

    Category getCategoryById(Long id);
}
