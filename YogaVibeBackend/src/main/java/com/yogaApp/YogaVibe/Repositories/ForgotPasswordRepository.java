package com.yogaApp.YogaVibe.Repositories;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.yogaApp.YogaVibe.Models.ForgotPassword;
import com.yogaApp.YogaVibe.Models.User;

import java.util.Optional;

@Repository
public interface ForgotPasswordRepository extends JpaRepository<ForgotPassword, Integer> {
    Optional<ForgotPassword> findByOtp(Integer otp);

    Optional<ForgotPassword> findByUser(User user);

    Optional<ForgotPassword> findByOtpAndUser_Email(Integer otp, String email);
}
