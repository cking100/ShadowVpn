package com.example.vpn_backend.service;
import com.example.vpn_backend.entity.Token;
import com.example.vpn_backend.entity.User;
import com.example.vpn_backend.repository.TokenRepository;
import com.example.vpn_backend.service.TokenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TokenServiceImpl implements TokenService {

    private final TokenRepository tokenRepository;

    @Autowired
    public TokenServiceImpl(TokenRepository tokenRepository) {
        this.tokenRepository = tokenRepository;
    }

    @Override
    public Token createToken(User user, String tokenStr) {
        Token token = new Token();
        token.setUser(user);
        token.setToken(tokenStr);
        token.setExpired(false);
        token.setRevoked(false);
        return tokenRepository.save(token);
    }

    @Override
    public Optional<Token> findByToken(String token) {
        return tokenRepository.findByToken(token);
    }

    @Override
    public List<Token> getTokensByUser(User user) {
        return tokenRepository.findAllByUser(user);
    }

    @Override
    public void revokeToken(String tokenStr) {
        tokenRepository.findByToken(tokenStr).ifPresent(token -> {
            token.setRevoked(true);
            token.setExpired(true);
            tokenRepository.save(token);
        });
    }

    @Override
    public void revokeAllUserTokens(User user) {
        List<Token> tokens = tokenRepository.findAllByUser(user);
        for (Token token : tokens) {
            token.setRevoked(true);
            token.setExpired(true);
        }
        tokenRepository.saveAll(tokens);
    }

    @Override
    public boolean isTokenValid(String tokenStr) {
        return tokenRepository.findByToken(tokenStr)
            .map(token -> !token.getRevoked() && !token.getExpired())
            .orElse(false);
    }
}
