// src/components/ServerStatusPanel.jsx
import React, { useEffect, useState } from "react";
import "./ServerStatusPanel.css";

export default function ServerStatusPanel() {
  const [servers, setServers] = useState([]);

  useEffect(() => {
    // Simulate fetching from server
    const mockData = [
      { name: "New York", ping: 23, load: 0.3, status: "online" },
      { name: "London", ping: 45, load: 0.5, status: "online" },
      { name: "Tokyo", ping: 120, load: 0.7, status: "degraded" },
      { name: "Sydney", ping: 200, load: 0.9, status: "offline" },
    ];

    // Simulate delay
    const timer = setTimeout(() => setServers(mockData), 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="server-status-panel">
      <h3>Server Status</h3>
      <table className="server-table">
        <thead>
          <tr>
            <th>Location</th>
            <th>Ping (ms)</th>
            <th>Load</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {servers.map((server) => (
            <tr key={server.name}>
              <td>{server.name}</td>
              <td>{server.ping}</td>
              <td>{(server.load * 100).toFixed(0)}%</td>
              <td className={`status ${server.status}`}>{server.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
