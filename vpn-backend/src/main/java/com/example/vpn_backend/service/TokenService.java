package com.example.vpn_backend.service;
import java.util.List;
import java.util.Optional;

import com.example.vpn_backend.entity.Token;
import com.example.vpn_backend.entity.User;

public interface TokenService {
    Token createToken(User user, String tokenStr);
    Optional<Token> findByToken(String token);
    List<Token> getTokensByUser(User user);
    void revokeToken(String token);
    void revokeAllUserTokens(User user);
    boolean isTokenValid(String token);
}
