package com.yogaApp.YogaVibe.Services;

import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import com.yogaApp.YogaVibe.Dtos.RequestDtos.MailBody;

@Service
public class EmailService {

    private final JavaMailSender javaMailSender;
    

    public EmailService(JavaMailSender javaMailSender) {
        this.javaMailSender = javaMailSender;
    }

    @Async
    public void sendSimpleMessage(MailBody mailBody) {
        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setTo(mailBody.to());
            message.setFrom("YOGAVIBE <anshulsen01032006@gmail.com>");
            message.setSubject(mailBody.subject());
            message.setText(mailBody.text());
            
            javaMailSender.send(message);
        } catch (Exception e) {
            throw new RuntimeException("Failed to send email: " + e.getMessage(), e);
        }
    }
}
