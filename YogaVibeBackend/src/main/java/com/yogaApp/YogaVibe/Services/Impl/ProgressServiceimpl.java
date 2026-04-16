package com.yogaApp.YogaVibe.Services.Impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.yogaApp.YogaVibe.Models.Progress;
import com.yogaApp.YogaVibe.Services.ProgressService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ProgressServiceimpl implements ProgressService{
    
    @Override
    public void saveProgress(Long yogaId, Integer watchedSeconds) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'saveProgress'");
    }

    @Override
    public List<Progress> getUserProgress() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getUserProgress'");
    }

    @Override
    public double getCompletionPercentage(Long yogaId) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getCompletionPercentage'");
    }

    @Override
    public int getCurrentStreak() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getCurrentStreak'");
    }
    
}
