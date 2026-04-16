package com.yogaApp.YogaVibe.Services;

import java.util.List;

import com.yogaApp.YogaVibe.Models.Progress;

public interface ProgressService {

    void saveProgress(Long yogaId, Integer watchedSeconds);

    List<Progress> getUserProgress();

    double getCompletionPercentage(Long yogaId);

    int getCurrentStreak();

}
