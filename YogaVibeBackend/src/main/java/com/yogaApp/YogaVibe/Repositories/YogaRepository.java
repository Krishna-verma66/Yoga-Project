package com.yogaApp.YogaVibe.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.yogaApp.YogaVibe.Models.Yoga;

public interface YogaRepository extends JpaRepository<Yoga, Long> {
   List<Yoga> findByCategoryId(Long categoryId);
}
