package com.example.vpn_backend.service;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.vpn_backend.entity.VpnServer;
import com.example.vpn_backend.repository.VpnServerRepository;

@Service
public class VpnServerServiceImpl implements VpnServerService {

    private final VpnServerRepository vpnServerRepository;

    @Autowired
    public VpnServerServiceImpl(VpnServerRepository vpnServerRepository) {
        this.vpnServerRepository = vpnServerRepository;
    }

    @Override
    public VpnServer saveServer(VpnServer server) {
        return vpnServerRepository.save(server);
    }

    @Override
    public List<VpnServer> getAllServers() {
        return vpnServerRepository.findAll();
    }

    @Override
    public Optional<VpnServer> getServerById(Long id) {
        return vpnServerRepository.findById(id);
    }

    @Override
    public void deleteServer(Long id) {
        vpnServerRepository.deleteById(id);
    }

    @Override
    public VpnServer updateServer(Long id, VpnServer updatedServer) {
        return vpnServerRepository.findById(id).map(server -> {
            server.setCity(updatedServer.getCity());
            server.setCountry(updatedServer.getCountry());
            server.setIpAddress(updatedServer.getIpAddress());
            server.setLatency(updatedServer.getLatency());
            server.setStatus(updatedServer.getStatus());
            return vpnServerRepository.save(server);
        }).orElse(null);
    }
}
