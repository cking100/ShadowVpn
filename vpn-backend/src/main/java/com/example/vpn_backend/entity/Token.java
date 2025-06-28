package com.example.vpn_backend.entity;
import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "tokens")
public class Token {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String token;

    @ManyToOne
    private User user;

    private boolean revokeAt;

    private boolean expire;

    private LocalDateTime issuein;

    public Token() {
        this.issuein = LocalDateTime.now();
    }

    public Token(String token, User user, boolean revoked, boolean expired) {
        this.token = token;
        this.user = user;
        this.revokeAt = revoked;
        this.expire = expired;
        this.issuein = LocalDateTime.now();
    }
    public Long getId() {
        return id;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public boolean isRevokeAt() {
        return revokeAt;
    }

    public void setRevokeAt(boolean revoked) {
        this.revokeAt = revokeAt;
    }

    public boolean isExpire() {
        return expire;
    }

    public void setExpire(boolean expire) {
        this.expire = expire;
    }

    public LocalDateTime getIssuein() {
        return issuein;
    }

    public void setIssuein(LocalDateTime issuedin) {
        this.issuein = issuedin;
    }
}
