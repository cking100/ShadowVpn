package com.example.vpn_backend.repository;

import com.example.vpn_backend.entity.VpnServer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface VpnServerRepository extends JpaRepository<VpnServer, Long> {
    List<VpnServer> findByStatusTrue();
    List<VpnServer> findByCountry(String country);
}
