package com.yogaApp.YogaVibe.Services.Impl;

import org.springframework.stereotype.Service;

import com.yogaApp.YogaVibe.Models.User;
import com.yogaApp.YogaVibe.Services.UserService;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService{
    
    @Override
    public User getCurrentUser() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getCurrentUser'");
    }

    @Override
    public void deleteAccount() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'deleteAccount'");
    }
}
