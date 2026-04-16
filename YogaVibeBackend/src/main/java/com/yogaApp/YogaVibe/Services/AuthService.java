package com.yogaApp.YogaVibe.Services;

import com.yogaApp.YogaVibe.Dtos.RequestDtos.SignupRequest;
import com.yogaApp.YogaVibe.Dtos.ResponseDtos.SignupResponse;

public interface AuthService {

    SignupResponse registerUser(SignupRequest request);
}
