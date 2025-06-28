package com.example.vpn_backend.entity;
import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;

    private String email;

    private String password;

    private LocalDateTime timestamp;

    public User() {
        this.timestamp = LocalDateTime.now();
    }

    public User(String username, String email, String password) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.timestamp = LocalDateTime.now();

    }
     public Long getId() {
        return id;
    }
      public String getusername() {
        return username;
    }

    public void setusername(String username) {
        this.username = username;
    }
    public String getemail() {
        return email;

    }
    public void setemail(String email) {
        this.email = email;
    }
    public String getpassword() {
        return password;
    }
    public void setpassword (String password) {
        this.password = password;
    }
    
    public LocalDateTime gettimestamp() {
        return timestamp;
    }
}