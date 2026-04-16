package com.yogaApp.YogaVibe.Dtos.RequestDtos;

import lombok.Data;
import lombok.RequiredArgsConstructor;


@Data
@RequiredArgsConstructor
public class SignupRequest {
    
    private String email;
    private String name;
    private String password;
    
}
