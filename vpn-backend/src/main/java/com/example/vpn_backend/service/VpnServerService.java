package com.example.vpn_backend.service;
import java.util.List;
import java.util.Optional;

import com.example.vpn_backend.entity.VpnServer;

public interface VpnServerService {
    VpnServer saveServer(VpnServer server);
    List<VpnServer> getAllServers();
    Optional<VpnServer> getServerById(Long id);
    void deleteServer(Long id);
    VpnServer updateServer(Long id, VpnServer updatedServer);
}
