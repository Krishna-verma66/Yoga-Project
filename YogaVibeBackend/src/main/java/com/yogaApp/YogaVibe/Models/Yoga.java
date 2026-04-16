package com.yogaApp.YogaVibe.Models;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@Entity
@Table(name = "yogas")
@Data
@RequiredArgsConstructor
public class Yoga {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    private String description;

    @Column(unique = true, nullable = false)
    private String videoUrl;

    @Column(nullable = false)
    private String imageUrl;

    private Integer durationMinutes;

    private String difficultyLevel;

    @OneToMany(mappedBy = "yoga")
    private List<Progress> progress;

    @ManyToOne
    @JoinColumn(name = "uploaded_by")
    private User uploadedBy;

    @OneToMany(mappedBy = "yoga")
    private List<Favorite> yoga;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;

}
