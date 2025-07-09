package com.example.vpn_backend.service;
import java.util.List;

import com.example.vpn_backend.entity.ConnectionLog;
public interface ConnectionLogService {
    List<ConnectionLog> getLogsForUser(Long userId);
    ConnectionLog save(ConnectionLog log);
}
