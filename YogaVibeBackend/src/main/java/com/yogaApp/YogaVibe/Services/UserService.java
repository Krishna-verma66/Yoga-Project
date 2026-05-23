package com.yogaApp.YogaVibe.Services;

import java.time.Instant;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import com.yogaApp.YogaVibe.Dtos.RequestDtos.SignupRequest;
import com.yogaApp.YogaVibe.Dtos.ResponseDtos.SignupResponse;
import com.yogaApp.YogaVibe.Models.Provider;
import com.yogaApp.YogaVibe.Models.Role;
import com.yogaApp.YogaVibe.Models.User;
import com.yogaApp.YogaVibe.Repositories.UserRepository;
import com.yogaApp.YogaVibe.Services.UserService;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserService{

    private final UserRepository userRepository;
    private final ModelMapper modelMapper;
    
    
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
    
        // Password check is Applid in authService during encoding
        

        User user = modelMapper.map(request, User.class);
        user.setEnable(true);
        user.setCreatedAt(Instant.now());
        user.setProvider(Provider.LOCAL);
        user.setRole(Role.USER);
        userRepository.save(user);
        return new SignupResponse("User Registered Successfully");

    }
}
