package com.yogaApp.YogaVibe.Dtos.RequestDtos;

import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
@RequiredArgsConstructor
public class LoginRequest{
        String email;
        String password;

}
