package com.yogaApp.YogaVibe.Dtos.RequestDtos;

import lombok.Builder;

@Builder
public record MailBody(String to, String subject, String text) {

}
