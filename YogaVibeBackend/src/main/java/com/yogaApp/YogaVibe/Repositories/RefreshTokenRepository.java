package com.yogaApp.YogaVibe.Repositories;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import com.yogaApp.YogaVibe.Models.RefreshToken;
import com.yogaApp.YogaVibe.Models.User;

public interface RefreshTokenRepository extends JpaRepository<RefreshToken, Long> {

    Optional<RefreshToken> findByToken(String token);

    void deleteByUser(User user);

    Optional<RefreshToken> findByUser(User user);
}
