package com.example.vpn_backend.service;
import java.util.Optional;

import com.example.vpn_backend.entity.User;
public interface UserService {
    Optional<User> getUserByEmail(String email);
        User save(User user);
}
