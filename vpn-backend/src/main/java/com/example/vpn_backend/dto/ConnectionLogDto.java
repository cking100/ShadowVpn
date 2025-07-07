package com.example.vpn_backend.dto;

import java.time.LocalDateTime;
public class ConnectionLogDto {
    private String username;
    private String location;
    private LocalDateTime connectedAt;
    private LocalDateTime discontinue;

    public ConnectionLogDto() {}

    public ConnectionLogDto(String username, String location, LocalDateTime connectedAt, LocalDateTime discontinue) {
        this.username = username;
        this.location = location;
        this.connectedAt = connectedAt;
        this.discontinue = discontinue;
    }


    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }

    public String getLocation() { return location; }
    public void setLocation(String location) { this.location = location; }

    public LocalDateTime getConnectedAt() { return connectedAt; }
    public void setConnectedAt(LocalDateTime connectedAt) { this.connectedAt = connectedAt; }

    public LocalDateTime getDisconnectedAt() { return discontinue; }
    public void setDisconnectedAt(LocalDateTime discontinue) { this.discontinue = discontinue; }
}
