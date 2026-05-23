package com.yogaApp.YogaVibe.Dtos.ResponseDtos;

import com.yogaApp.YogaVibe.Models.Provider;
import com.yogaApp.YogaVibe.Models.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AuthResponse {

    private String accessToken;

    private Long id;

    private String name;

    private String email;

    private Role role;

    private Provider provider;
}
