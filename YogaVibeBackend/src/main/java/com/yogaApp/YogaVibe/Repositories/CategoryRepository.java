package com.yogaApp.YogaVibe.Repositories;


import org.springframework.data.jpa.repository.JpaRepository;

import com.yogaApp.YogaVibe.Models.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {

}
