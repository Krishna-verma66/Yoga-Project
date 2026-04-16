package com.yogaApp.YogaVibe.Models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@Entity
@Table(name = "calming_sounds")
@Data
@RequiredArgsConstructor
public class CalmingSound {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    @Column(nullable = false)
    private String audioUrl;

    @Column(nullable = false)
    private String imageUrl;

    private Integer durationSeconds;

    @ManyToOne
    @JoinColumn(name = "uploaded_by")
    private User uploadedBy;
}
