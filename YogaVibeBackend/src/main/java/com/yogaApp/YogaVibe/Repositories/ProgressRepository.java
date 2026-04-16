package com.yogaApp.YogaVibe.Repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.yogaApp.YogaVibe.Models.Progress;

public interface ProgressRepository extends JpaRepository<Progress, Long> {
    
    List<Progress> findByUserId(Long userId);
    Optional<Progress> findByUserIdAndYogaId(Long userId, Long yogaId);
}
