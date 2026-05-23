package com.yogaApp.YogaVibe.Services;

import java.time.Instant;
import java.util.Date;
import java.util.concurrent.ThreadLocalRandom;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.yogaApp.YogaVibe.Dtos.RequestDtos.ForgetPasswordRequest;
import com.yogaApp.YogaVibe.Dtos.RequestDtos.LoginRequest;
import com.yogaApp.YogaVibe.Dtos.RequestDtos.MailBody;
import com.yogaApp.YogaVibe.Dtos.RequestDtos.ResetPasswordRequest;
import com.yogaApp.YogaVibe.Dtos.RequestDtos.SignupRequest;
import com.yogaApp.YogaVibe.Dtos.RequestDtos.VerifyPasswordRequest;
import com.yogaApp.YogaVibe.Dtos.ResponseDtos.AuthResponse;
import com.yogaApp.YogaVibe.Dtos.ResponseDtos.SignupResponse;
import com.yogaApp.YogaVibe.Models.ForgotPassword;
import com.yogaApp.YogaVibe.Models.PasswordResetToken;
import com.yogaApp.YogaVibe.Models.Provider;
import com.yogaApp.YogaVibe.Models.RefreshToken;
import com.yogaApp.YogaVibe.Models.User;
import com.yogaApp.YogaVibe.Repositories.ForgotPasswordRepository;
import com.yogaApp.YogaVibe.Repositories.RefreshTokenRepository;
import com.yogaApp.YogaVibe.Repositories.ResetTokenRepository;
import com.yogaApp.YogaVibe.Repositories.UserRepository;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.transaction.Transactional;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@Service
@Data
@RequiredArgsConstructor
public class AuthService {

  private final UserService userService;
  private final PasswordEncoder passwordEncoder;
  private final JwtService jwtService;
  private final AuthenticationManager authenticationManager;
  private final UserRepository userRepository;
  private final RefreshTokenRepository refreshTokenRepository;
  private final ForgotPasswordRepository forgotPasswordRepository;
  private final EmailService emailService;
  private final ResetTokenRepository resetTokenRepository;

  @Value("${jwt.refresh.expiration}")
  private long refreshExpiration;

  @Value("${jwt.refresh.remember.expiration}")
  private long rememberExpiration;

  // --------------------------------- Registering new user ---------------------

  public SignupResponse registerUser(SignupRequest request) {

    if (request.getPassword() == null || request.getPassword().isBlank()) {
      throw new IllegalArgumentException("Password is Required");
    }
    request.setPassword(passwordEncoder.encode(request.getPassword()));
    return userService.createUser(request);

  }

  // ------------------------------ This is For Login Request
  // --------------------------------

  @Transactional
  public AuthResponse login(LoginRequest request, HttpServletResponse response) {

    // checking the user checked the remeber me or not

    long refreshExpiry;

    if (Boolean.TRUE.equals(request.getRememberMe())) {
      refreshExpiry = rememberExpiration;
    } else {
      refreshExpiry = refreshExpiration;
    }

    authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
        request.getEmail(),
        request.getPassword()));

    User user = userRepository
        .findByEmail(request.getEmail())
        .orElseThrow();

    String jwtToken = jwtService.generateToken(user);
    String refreshToken = jwtService.generateRefreshToken(user, refreshExpiry);

    // delete refresh old token if exists

    refreshTokenRepository.deleteByUser(user);

    // save the new token to the database

    RefreshToken savedToken = RefreshToken.builder()
        .token(refreshToken)
        .createdAt(Instant.now())
        .expiresAt(Instant.now().plusSeconds(refreshExpiry))
        .user(user)
        .rememberMe(request.getRememberMe())
        .revoked(false)
        .build();
    refreshTokenRepository.save(savedToken);

    // sending the Token to the Cookie Browser

    ResponseCookie cookie = ResponseCookie
        .from("refreshToken", refreshToken)
        .httpOnly(true)
        .secure(false)
        .path("/")
        .maxAge(refreshExpiry)
        .sameSite("Lax")
        .build();

    response.addHeader(
        HttpHeaders.SET_COOKIE,
        cookie.toString());

    return AuthResponse.builder()
        .accessToken(jwtToken)
        .id(user.getId())
        .name(user.getName())
        .email(user.getEmail())
        .role(user.getRole())
        .provider(Provider.LOCAL)
        .build();
  }

  // ---------------------------------- generating refresh token
  // ---------------------------

  @Transactional
  public AuthResponse refreshToken(HttpServletRequest request, HttpServletResponse response) {

    String requestRefreshToken = extractRefreshToken(request);

    RefreshToken storedToken = refreshTokenRepository.findByToken(requestRefreshToken)
        .orElseThrow(() -> new RuntimeException("Invalid refresh token"));

    // checking the getRemember me from old token

    long refreshExpiry;

    if (Boolean.TRUE.equals(storedToken.getRememberMe())) {
      refreshExpiry = rememberExpiration;
    } else {
      refreshExpiry = refreshExpiration;
    }

    if (storedToken.getExpiresAt().isBefore(Instant.now())) {
      refreshTokenRepository.delete(storedToken);
      throw new RuntimeException("Refresh token expired");
    }

    User user = storedToken.getUser();
    String newAccessToken = jwtService.generateToken(user);

    // rotation of referesh token

    String newRefreshToken = jwtService.generateRefreshToken(user, refreshExpiry);

    refreshTokenRepository.findByUser(user)
        .ifPresent(token -> {
          refreshTokenRepository.delete(token);
          refreshTokenRepository.flush();
        });

    RefreshToken newStoredToken = RefreshToken.builder()
        .token(newRefreshToken)
        .expiresAt(Instant.now().plusSeconds(refreshExpiry))
        .rememberMe(storedToken.getRememberMe())
        .createdAt(Instant.now())
        .revoked(true)
        .user(user)
        .build();

    refreshTokenRepository.save(newStoredToken);

    ResponseCookie cookie = ResponseCookie
        .from("refreshToken", newRefreshToken)
        .httpOnly(true)
        .secure(false)
        .path("/")
        .maxAge(refreshExpiry)
        .sameSite("Lax")
        .build();

    response.addHeader(
        HttpHeaders.SET_COOKIE,
        cookie.toString());

    return AuthResponse.builder()
        .accessToken(newAccessToken)
        .id(user.getId())
        .name(user.getName())
        .email(user.getEmail())
        .role(user.getRole())
        .build();
  }

  // ------------------------------ Logging out the User
  // -----------------------------------

  @Transactional
  public void logout(HttpServletRequest request,
      HttpServletResponse response) {

    String refreshToken = extractRefreshToken(request);

    refreshTokenRepository
        .findByToken(refreshToken)
        .ifPresent(refreshTokenRepository::delete);

    ResponseCookie deleteCookie = ResponseCookie
        .from("refreshToken", "")
        .httpOnly(true)
        .secure(false)
        .path("/")
        .maxAge(0)
        .sameSite("Lax")
        .build();

    response.addHeader(
        HttpHeaders.SET_COOKIE,
        deleteCookie.toString());
  }

  // extracting the refrsh token from the request

  private String extractRefreshToken(HttpServletRequest request) {
    if (request.getCookies() == null) {
      throw new RuntimeException("No cookies found");
    }
    for (var cookie : request.getCookies()) {
      if (cookie.getName().equals("refreshToken")) {
        return cookie.getValue();
      }
    }
    throw new RuntimeException("Refresh token not found");
  }

  // ---------------------- forget password components
  // ----------------------------------------------

  @Transactional
  public ResponseEntity<String> sendOtp(ForgetPasswordRequest email) {
    User user = userRepository.findByEmail(email.getEmail())
        .orElse(null);

    if (user == null) {
      return ResponseEntity.ok("Otp sent successfully on registered Email");
    }

    // generate otp of 4 digits
    int otp = ThreadLocalRandom.current().nextInt(100000, 1000000);

    // Find existing OTP for user
    ForgotPassword forgotPassword = forgotPasswordRepository
        .findByUser(user)
        .orElse(new ForgotPassword());

    // Update fields (or set for new)
    forgotPassword.setOtp(otp);
    forgotPassword.setExpirationTime(
        new Date(System.currentTimeMillis() + 10 * 60 * 1000) // 10 minutes
    );
    forgotPassword.setUser(user);

    // building the mailService for sending the email
    MailBody mailBody = MailBody.builder()
        .to(email.getEmail())
        .text(
            "Namaste 🙏\n\n" +

                "We received a request to reset your YogaVibe account password.\n\n" +
                "Your verification OTP is:\n\n" +
                "      " + otp + "\n\n" +
                "This OTP will remain valid for the next 10 minutes.\n" +
                "For your security, please do not share it with anyone.\n\n" +
                "If you did not request a password reset, you can safely ignore this email.\n\n" +
                "Stay mindful. Stay healthy 🌿\n\n" +
                "— Team YogaVibe")
        .subject("YOGAVIBE – Password Reset OTP")
        .build();

    // sending the email using email service class
    emailService.sendSimpleMessage(mailBody);

    // save() → UPDATE if exists, INSERT if new
    forgotPasswordRepository.save(forgotPassword);

    return ResponseEntity.ok("OTP Sent Successfully");
  }

  // ---------------- Verifying the Otp sent by the user

  @Transactional
  public ResponseEntity<String> verifyOtp(VerifyPasswordRequest request) {

    ForgotPassword forgotPassword = forgotPasswordRepository
        .findByOtpAndUser_Email(request.getOtp(), request.getEmail())
        .orElseThrow(() -> new RuntimeException("Invalid OTP or Email"));

    // check expiration
    if (forgotPassword.getExpirationTime().before(new Date())) {
      throw new RuntimeException("OTP has expired");
    }

    // OTP is valid → user is confirmed
    User user = forgotPassword.getUser();

    // Delete existing token if exists
    resetTokenRepository.findByUser(user)
        .ifPresent(resetTokenRepository::delete);
    resetTokenRepository.flush();

    // Generate reset token
    String resetToken = jwtService.generateResetToken(forgotPassword.getUser());

    // saving the reset token in db
    PasswordResetToken pass = new PasswordResetToken();
    pass.setToken(resetToken);
    pass.setUser(forgotPassword.getUser());
    pass.setExpiryDate(new Date(System.currentTimeMillis() + 10 * 60 * 1000));

    // saving the record of token in the db
    resetTokenRepository.save(pass);

    // delete otp after successfull verification
    forgotPasswordRepository.delete(forgotPassword);

    return ResponseEntity.ok(resetToken);
  }

  // ------------------------ Resetting the password ----------------

  public ResponseEntity<String> resetPassword(String token, ResetPasswordRequest request) {

    if (!request.getNewPassword().equals(request.getConfirmPassword())) {
      throw new RuntimeException("Passwords do not match");
    }
    System.out.println("Received token: " + token);

    PasswordResetToken resetToken = resetTokenRepository.findByToken(token)
        .orElseThrow(() -> new RuntimeException("Invalid token"));

    if (resetToken.getExpiryDate().before(new Date())) {
      throw new RuntimeException("Token expired");
    }

    User user = resetToken.getUser();
    user.setPassword(passwordEncoder.encode(request.getNewPassword()));
    userRepository.save(user);

    // delete token after use
    resetTokenRepository.delete(resetToken);

    return ResponseEntity.ok("Password Successfully Updated ");
  }

}
