package com.example.vpn_backend.service;

import com.example.vpn_backend.entity.ConnectionLog;
import com.example.vpn_backend.repository.ConnectionLogRepository;
import com.example.vpn_backend.service.ConnectionLogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ConnectionLogServiceImpl implements ConnectionLogService {

    @Autowired
    private ConnectionLogRepository connectionLogRepository;

    @Override
    public List<ConnectionLog> getLogsForUser(Long userId) {
        return connectionLogRepository.findByUserId(userId);
    }

    @Override
    public ConnectionLog save(ConnectionLog log) {
        return connectionLogRepository.save(log);
    }
}

