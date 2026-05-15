package com.yogaApp.YogaVibe.Services;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.yogaApp.YogaVibe.Dtos.RequestDtos.LoginRequest;
import com.yogaApp.YogaVibe.Dtos.RequestDtos.SignupRequest;
import com.yogaApp.YogaVibe.Dtos.ResponseDtos.AuthResponse;
import com.yogaApp.YogaVibe.Dtos.ResponseDtos.SignupResponse;
import com.yogaApp.YogaVibe.Models.User;
import com.yogaApp.YogaVibe.Repositories.UserRepository;
import com.yogaApp.YogaVibe.Services.AuthService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthService {

  private final UserService userService;
  private final PasswordEncoder passwordEncoder;
  private final JwtService jwtService;
  private final AuthenticationManager authenticationManager;
  private final UserRepository userRepository;

  public SignupResponse registerUser(SignupRequest request) {

    if (request.getPassword() == null || request.getPassword().isBlank()) {
      throw new IllegalArgumentException("Password is Required");
    }
    request.setPassword(passwordEncoder.encode(request.getPassword()));
    return userService.createUser(request);

  }

  public AuthResponse login(LoginRequest request) {

       authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
            request.getEmail(),
            request.getPassword()));

    User user = userRepository
        .findByEmail(request.getEmail())
        .orElseThrow();

    String jwtToken = jwtService.generateToken(user);

    return AuthResponse.builder()
        .token(jwtToken)
        .id(user.getId())
        .name(user.getName())
        .email(user.getEmail())
        .role(user.getRole())
        .build();
  }

}
