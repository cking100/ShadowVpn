// === Updated Dashboard.jsx ===
import { useState, useEffect } from "react";
import Header from "../components/Header";
import StatusCard from "../components/StatusCard";
import ConnectButton from "../components/ConnectButton";
import LocationSelect from "../components/LocationSelect";
import DiagnosticsPanel from "../components/DiagnosticsPanel";
import Clock from "../components/Clock";
import "./Dashboard.css";

export default function Dashboard() {
  const [connected, setConnected] = useState(false);
  const [location, setLocation] = useState("New York, USA");
  const [startTime, setStartTime] = useState(null);
  const [elapsed, setElapsed] = useState("00:00:00");
  const [ip, setIp] = useState("Fetching...");
  const [status, setStatus] = useState("Disconnected");

  // Timer logic
  useEffect(() => {
    let timer = null;
    if (connected) {
      setStartTime(Date.now());
      setStatus("Connected");
      timer = setInterval(() => {
        const diff = Math.floor((Date.now() - startTime) / 1000);
        const h = String(Math.floor(diff / 3600)).padStart(2, "0");
        const m = String(Math.floor((diff % 3600) / 60)).padStart(2, "0");
        const s = String(diff % 60).padStart(2, "0");
        setElapsed(`${h}:${m}:${s}`);
      }, 1000);
    } else {
      setStatus("Disconnected");
      setElapsed("00:00:00");
    }
    return () => clearInterval(timer);
  }, [connected, startTime]);

  // IP Address Fetch
  useEffect(() => {
    fetch("https://api.ipify.org?format=json")
      .then((res) => res.json())
      .then((data) => setIp(data.ip))
      .catch(() => setIp("Unavailable"));
  }, [connected]);

  // Handle connect feedback
  const handleToggleConnection = () => {
    if (!connected && "vibrate" in navigator) {
      navigator.vibrate([100, 50, 100]);
    }
    setConnected(!connected);
  };

  return (
    <div className="dashboard-container">
      <Header />
      <div className="dashboard-main">
        <div className="dashboard-header">
          <h2>Dashboard</h2>
          <LocationSelect selected={location} onChange={setLocation} />
        </div>

        <div className="dashboard-cards">
          <StatusCard label="Status" value={status} statusColor={connected ? "green" : "red"} />
          <StatusCard label="Location" value={location} />
          <StatusCard label="IP Address" value={ip} />
          <StatusCard label="Uptime" value={elapsed} />
        </div>

        <Clock location={location} connected={connected} />
        <DiagnosticsPanel connected={connected} />

        <div className="dashboard-actions">
          <ConnectButton connected={connected} toggleConnection={handleToggleConnection} />
        </div>
      </div>
    </div>
  );
}
