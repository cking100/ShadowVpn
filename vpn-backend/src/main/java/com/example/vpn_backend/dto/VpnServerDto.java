package com.example.vpn_backend.dto;
public class VpnServerDto {
    private Long id;
    private String country;
    private String state;
    private String ipAddress;
    private Integer latency;
    private Boolean status;
    public VpnServerDto() {}

    public VpnServerDto(Long id, String country, String state, String ipAddress, Integer latency, Boolean status) {
        this.id = id;
        this.country = country;
        this.state = state;
        this.ipAddress = ipAddress;
        this.latency = latency;
        this.status = status;
    }
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getCountry() { return country; }
    public void setCountry(String country) { this.country = country; }

    public String getState() { return state; }
    public void setState(String state) { this.state = state; }

    public String getIpAddress() { return ipAddress; }
    public void setIpAddress(String ipAddress) { this.ipAddress = ipAddress; }

    public Integer getLatency() { return latency; }
    public void setLatency(Integer latency) { this.latency = latency; }

    public Boolean getStatus() { return status; }
    public void setStatus(Boolean status) { this.status = status; }
}
