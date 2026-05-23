package com.yogaApp.YogaVibe.Controllers;

import java.util.Map;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yogaApp.YogaVibe.Dtos.RequestDtos.ForgetPasswordRequest;
import com.yogaApp.YogaVibe.Dtos.RequestDtos.LoginRequest;
import com.yogaApp.YogaVibe.Dtos.RequestDtos.ResetPasswordRequest;
import com.yogaApp.YogaVibe.Dtos.RequestDtos.SignupRequest;
import com.yogaApp.YogaVibe.Dtos.RequestDtos.VerifyPasswordRequest;
import com.yogaApp.YogaVibe.Dtos.ResponseDtos.AuthResponse;
import com.yogaApp.YogaVibe.Dtos.ResponseDtos.SignupResponse;
import com.yogaApp.YogaVibe.Models.User;
import com.yogaApp.YogaVibe.Services.AuthService;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

//    @GetMapping("/me")
// public ResponseEntity<?> getCurrentUser(Authentication authentication) {

//     User user = (User) authentication.getPrincipal();

//     return ResponseEntity.ok(
//             Map.of(
//                     "id", user.getId(),
//                     "name", user.getName(),
//                     "email", user.getEmail(),
//                     "role", user.getRole(),
//                     "provider", user.getProvider()
//             )
//     );
// }
    @PostMapping("/register")
    public ResponseEntity<SignupResponse> registerUser(@RequestBody SignupRequest signupRequest) {
        return ResponseEntity.status(HttpStatus.CREATED).body(authService.registerUser(signupRequest));
    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(
            @Valid @RequestBody LoginRequest request,
            HttpServletResponse response) {
        return ResponseEntity.ok(
                authService.login(request, response));
    }

    @PostMapping("/refresh")
    public ResponseEntity<AuthResponse> refreshToken(HttpServletRequest request, HttpServletResponse response) {
        return ResponseEntity.ok(authService.refreshToken(request, response));
    }

    @PostMapping("/logout")
    public ResponseEntity<String> logoutUser(HttpServletRequest request, HttpServletResponse response) {
        authService.logout(request, response);
        return ResponseEntity.ok("Logged Out Successfully");
    }

    // send email for email verification

    @PostMapping("/send-otp")
    public ResponseEntity<String> sendOtp(@RequestBody ForgetPasswordRequest email) {
        return authService.sendOtp(email);
    }

    // verifying the otp send by the user to the server

    @PostMapping("/verify-otp")
    public ResponseEntity<String> verifyOtp(@RequestBody VerifyPasswordRequest otp) {
        return authService.verifyOtp(otp);
    }

    // resetting the password after verifying the otp

    @PostMapping("/reset-password")
    public ResponseEntity<String> resetPassword(
            @RequestHeader("Authorization") String authHeader,
            @RequestBody ResetPasswordRequest request) {

        String token = authHeader;

        if (token.startsWith("Bearer ")) {
            token = token.substring(7); //
        }

        return authService.resetPassword(token, request);
    }

}
