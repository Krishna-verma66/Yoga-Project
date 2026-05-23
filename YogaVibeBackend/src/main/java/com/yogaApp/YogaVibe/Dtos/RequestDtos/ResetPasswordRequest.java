package com.yogaApp.YogaVibe.Dtos.RequestDtos;

import lombok.Data;

@Data
public class ResetPasswordRequest {

    private String newPassword;
    private String confirmPassword;
}
