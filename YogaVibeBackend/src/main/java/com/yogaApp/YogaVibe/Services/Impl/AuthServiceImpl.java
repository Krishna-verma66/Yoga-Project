package com.yogaApp.YogaVibe.Services.Impl;


import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.yogaApp.YogaVibe.Dtos.RequestDtos.SignupRequest;
import com.yogaApp.YogaVibe.Dtos.ResponseDtos.SignupResponse;
import com.yogaApp.YogaVibe.Services.AuthService;
import com.yogaApp.YogaVibe.Services.UserService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService{

    private final UserService userService;
    private final PasswordEncoder passwordEncoder;

    
    @Override
    public SignupResponse registerUser(SignupRequest request) {
    request.setPassword(passwordEncoder.encode(request.getPassword()));
      return userService.createUser(request);
     
    }
    
}
