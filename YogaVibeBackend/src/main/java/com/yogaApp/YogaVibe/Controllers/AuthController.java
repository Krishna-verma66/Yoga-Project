package com.yogaApp.YogaVibe.Controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yogaApp.YogaVibe.Dtos.RequestDtos.SignupRequest;
import com.yogaApp.YogaVibe.Dtos.ResponseDtos.SignupResponse;
import com.yogaApp.YogaVibe.Services.AuthService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthController {

  private final AuthService authService;

   @PostMapping("/register")
    public ResponseEntity<SignupResponse> registerUser(@RequestBody SignupRequest signupRequest) {
        return ResponseEntity.status(HttpStatus.CREATED).body(authService.registerUser(signupRequest));
    }
    
}
