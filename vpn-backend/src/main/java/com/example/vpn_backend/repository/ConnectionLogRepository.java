package com.example.vpn_backend.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.vpn_backend.entity.ConnectionLog;
import com.example.vpn_backend.entity.User;

public interface ConnectionLogRepository extends JpaRepository<ConnectionLog, Long> {
    List<ConnectionLog> findByUser(User user);
    List<ConnectionLog> findByUserOrderByConnectedAtDesc(User user);
}
