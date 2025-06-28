package com.example.vpn_backend.entity;

import  com.example.vpn_backend.entity.VpnServer;
import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "connection_logs")
public class ConnectionLog {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private User user;

    @ManyToOne
    private VpnServer vpnServer;

    private LocalDateTime connectedAt;

    private LocalDateTime disconnectedAt;

    private Double dataUsedMB;

    public ConnectionLog() {
    }

    public ConnectionLog(User user, VpnServer vpnServer, LocalDateTime connectedAt, LocalDateTime disconnectedAt, Double dataUsedMB) {
        this.user = user;
        this.vpnServer = vpnServer;
        this.connectedAt = connectedAt;
        this.disconnectedAt = disconnectedAt;
        this.dataUsedMB = dataUsedMB;
    }

}
