package com.example.vpn_backend.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.vpn_backend.entity.Token;
import com.example.vpn_backend.entity.User;

public interface TokenRepository extends JpaRepository<Token, Long> {
    List<Token> findAllByUser(User user);
    Optional<Token> findByToken(String token);
}
