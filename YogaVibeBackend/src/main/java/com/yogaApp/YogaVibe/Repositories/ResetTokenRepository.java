package com.yogaApp.YogaVibe.Repositories;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.yogaApp.YogaVibe.Models.PasswordResetToken;
import com.yogaApp.YogaVibe.Models.User;

import java.util.Optional;

@Repository
public interface ResetTokenRepository extends JpaRepository<PasswordResetToken, Long> {

    Optional<PasswordResetToken> findByUser(User user);

    @Transactional
    void deleteByUser(User user);

    Optional<PasswordResetToken> findByToken(String token);
}




