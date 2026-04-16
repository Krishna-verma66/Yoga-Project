package com.yogaApp.YogaVibe.Models;

import java.time.Instant;
import java.util.List;
import java.util.UUID;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@Entity
@Table(name = "users")
@RequiredArgsConstructor
@Data
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false)
    private String userCode;

    @Column(nullable = false)
    private String name;

    @Column(unique = true, nullable = false)
    private String email;

    @Column(nullable = false)
    private String password;

    private String profilePicture;

    @Enumerated(EnumType.STRING)
    private Role role;

    private Instant createdAt = Instant.now();

    @PrePersist
    public void prepersist() {
        if (this.role == null) {
            this.role = Role.USER;
        }

        this.userCode = "USER_" + UUID.randomUUID().toString().substring(0, 8).toUpperCase();
    }

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<Progress> progressList;

    @OneToMany(mappedBy = "uploadedBy")
    private List<CalmingSound> uploadedSounds;

    @OneToMany(mappedBy = "uploadedBy")
    private List<Yoga> uploadedYogas;

    @OneToMany(mappedBy = "user")
    private List<Favorite> favorites;

}
