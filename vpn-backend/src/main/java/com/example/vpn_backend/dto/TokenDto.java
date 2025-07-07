package com.example.vpn_backend.dto;
import java.time.LocalDateTime;

public class TokenDto {

    private String token;
    private boolean expired;
    private boolean revoked;
    private LocalDateTime issuedAt;
    private String username;

    public TokenDto() {
    }

    public TokenDto(String token, boolean expired, boolean revoked, LocalDateTime issuedAt, String username) {
        this.token = token;
        this.expired = expired;
        this.revoked = revoked;
        this.issuedAt = issuedAt;
        this.username = username;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public boolean isExpired() {
        return expired;
    }

    public void setExpired(boolean expired) {
        this.expired = expired;
    }

    public boolean isRevoked() {
        return revoked;
    }

    public void setRevoked(boolean revoked) {
        this.revoked = revoked;
    }

    public LocalDateTime getIssuedAt() {
        return issuedAt;
    }

    public void setIssuedAt(LocalDateTime issuedAt) {
        this.issuedAt = issuedAt;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}

