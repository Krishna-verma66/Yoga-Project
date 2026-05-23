package com.yogaApp.YogaVibe.Security;

import java.io.IOException;
import java.time.Instant;
import java.util.UUID;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseCookie;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.yogaApp.YogaVibe.Dtos.ResponseDtos.AuthResponse;
import com.yogaApp.YogaVibe.Models.Provider;
import com.yogaApp.YogaVibe.Models.RefreshToken;
import com.yogaApp.YogaVibe.Models.Role;
import com.yogaApp.YogaVibe.Models.User;
import com.yogaApp.YogaVibe.Repositories.RefreshTokenRepository;
import com.yogaApp.YogaVibe.Repositories.UserRepository;
import com.yogaApp.YogaVibe.Services.AuthService;
import com.yogaApp.YogaVibe.Services.JwtService;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;


// frontend will request-> http://localhost:8082/oauth2/authorization/google


@RequiredArgsConstructor
@Component
public class OAuth2SuccessHandler implements AuthenticationSuccessHandler {

    private Logger logger = LoggerFactory.getLogger(this.getClass());

    private final UserRepository userRepository;
    private final JwtService jwtService;
    private final RefreshTokenRepository refreshTokenRepository;
    private final ObjectMapper objectMapper;

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
            Authentication authentication) throws IOException, ServletException {

        logger.info("Successfull Authentication");
        logger.info(authentication.toString());

        OAuth2User oAuth2User = (OAuth2User) authentication.getPrincipal();

        // Identify User

        String registrationId = "unknown";

        if (authentication instanceof OAuth2AuthenticationToken token) {
            registrationId = token.getAuthorizedClientRegistrationId();
        }

        logger.info("Registration Id : " + registrationId);
        logger.info("User : " + oAuth2User.getAttributes().toString());

        User user;

        switch (registrationId) {

            case "google" -> {

                String email = oAuth2User.getAttribute("email");
                String name = oAuth2User.getAttribute("name");
                String picture = oAuth2User.getAttribute("picture");

                // save the google user in database -> In case User not exists

                user = userRepository.findByEmail(email).orElseGet(() -> {

                    User newUser = User.builder()
                            .name(name)
                            .email(email)
                            .createdAt(Instant.now())
                            .enable(true)
                            .profilePicture(picture)
                            .provider(Provider.GOOGLE)
                            .role(Role.USER)
                            .build();

                    return userRepository.save(newUser);
                });
            }

            default -> throw new RuntimeException("Invalid provider");
        }

        // Now we will make refresh Token entity an generate access token -> for reponse


        refreshTokenRepository.findByUser(user)
    .ifPresent(token -> {
        refreshTokenRepository.delete(token);
        refreshTokenRepository.flush();
    });

        String refreshToken = jwtService.generateRefreshToken(user, jwtService.getRefreshExpiration());

        RefreshToken refreshTokenOb = refreshTokenRepository.findByUser(user).orElse(new RefreshToken());
                refreshTokenOb.setToken(refreshToken);
                refreshTokenOb.setUser(user);
                refreshTokenOb.setRevoked(false);
                refreshTokenOb.setExpiresAt(Instant.now()
                        .plusSeconds(jwtService.getRefreshExpiration()));
        refreshTokenRepository.save(refreshTokenOb);

        ResponseCookie refreshCookie = ResponseCookie
                .from("refreshToken", refreshToken)
                .httpOnly(true)
                .secure(false)
                .path("/")
                .maxAge(jwtService.getRefreshExpiration())
                .sameSite("Lax")
                .build();

        response.addHeader(
                HttpHeaders.SET_COOKIE,
                refreshCookie.toString());

       response.sendRedirect("http://localhost:5173/oauth-success");         
    }

}
