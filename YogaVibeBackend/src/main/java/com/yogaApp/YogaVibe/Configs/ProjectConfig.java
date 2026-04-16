package com.yogaApp.YogaVibe.Configs;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import jakarta.annotation.PostConstruct;

@Configuration
public class ProjectConfig {

    @PostConstruct
public void init() {
    System.out.println("ProjectConfig LOADED");
}

    @Bean
public ModelMapper modelMapper(){
    return new ModelMapper();
}

}
