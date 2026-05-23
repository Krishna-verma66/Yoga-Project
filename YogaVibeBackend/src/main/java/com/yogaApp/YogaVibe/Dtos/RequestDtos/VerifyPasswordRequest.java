package com.yogaApp.YogaVibe.Dtos.RequestDtos;

import lombok.Data;

@Data
public class VerifyPasswordRequest {

    private Integer otp;

    private String email;
}
