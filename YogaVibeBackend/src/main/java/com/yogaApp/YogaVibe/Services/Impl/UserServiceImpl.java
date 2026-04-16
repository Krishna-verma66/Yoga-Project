package com.yogaApp.YogaVibe.Services.Impl;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import com.yogaApp.YogaVibe.Dtos.RequestDtos.SignupRequest;
import com.yogaApp.YogaVibe.Dtos.ResponseDtos.SignupResponse;
import com.yogaApp.YogaVibe.Models.User;
import com.yogaApp.YogaVibe.Repositories.UserRepository;
import com.yogaApp.YogaVibe.Services.UserService;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService{

    private final UserRepository userRepository;
    private final ModelMapper modelMapper;
    
    @Override
    public SignupResponse createUser(SignupRequest request) {
        
        if(request.getEmail()== null || request.getEmail().isBlank()){
            throw new IllegalArgumentException("Email is required");
        }
        if(request.getName()== null || request.getName().isBlank()){
            throw new IllegalArgumentException("Name is required");
        }
        if(userRepository.existsByEmail(request.getEmail())){
            throw new IllegalArgumentException("Email is already registered");
        }
        if(request.getPassword()== null || request.getPassword().isBlank()){
            throw new IllegalArgumentException("Password is required");
        }

        User user = modelMapper.map(request, User.class);
        userRepository.save(user);
        return new SignupResponse("User Registered Successfully");

    }
}
