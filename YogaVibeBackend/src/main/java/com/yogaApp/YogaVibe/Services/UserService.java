package com.yogaApp.YogaVibe.Services;

import com.yogaApp.YogaVibe.Models.User;

public interface UserService {
    User getCurrentUser();

    void deleteAccount();
}
