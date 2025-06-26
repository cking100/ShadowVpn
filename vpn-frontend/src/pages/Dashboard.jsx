import { useState, useEffect } from "react";
import Header from "../components/Header";
import ConnectButton from "../components/ConnectButton";
import LocationSelect from "../components/LocationSelect";
import LocationCard from "../components/LocationCard";
import ServerStatusPanel from "../components/ServerStatusPanel";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Dashboard.css";

export default function Dashboard() {
  const [connected, setConnected] = useState(false);
  const [location, setLocation] = useState("New York, USA");
  const [time, settime] = useState(null);
  const [elapsed, setElapsed] = useState("00:00:00");
  const [ip, setIp] = useState("Fetching...");
  const [status, setStatus] = useState("Disconnected");

  useEffect(() => {
    let timer = null;
    if (connected && time) {
      timer = setInterval(() => {
        const diff = Math.floor((Date.now() - time) / 1000);
        const h = String(Math.floor(diff / 3600)).padStart(2, "0");
        const m = String(Math.floor((diff % 3600) / 60)).padStart(2, "0");
        const s = String(diff % 60).padStart(2, "0");
        setElapsed(`${h}:${m}:${s}`);
      }, 1000);
    } else {
      setElapsed("00:00:00");
    }
    return () => clearInterval(timer);
  }, [connected, time]);

  useEffect(() => {
    fetch("https://api.ipify.org?format=json")
      .then((res) => res.json())
      .then((data) => setIp(data.ip))
      .catch(() => setIp("Unavailable"));
  }, [connected]);

  const handleToggleConnection = () => {
    const now = new Date();

    if (!connected && "vibrate" in navigator) {
      navigator.vibrate([100, 50, 100]);
    }

    setConnected(!connected);
    settime(!connected ? now : null);
    setStatus(!connected ? "Connected" : "Disconnected");

    toast[!connected ? "success" : "warn"](
      `${!connected ? "Connected to" : "Disconnected from"} ${location}`
    );
  };

  return (
    <div className="main" style={{ flexGrow: 1, display: "flex", flexDirection: "column", overflowY: "auto" }}>
      <Header />

      <main style={{ padding: "22px", flex: 1 }}>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "12px",
          marginBottom: "16px",
        }}>
          <h2 style={{
            fontSize: "1.6rem",
            margin: 0,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            color: "#fff",
            flex: 1,
          }}>
            Dashboard
          </h2>
          <LocationSelect selected={location} onChange={setLocation} />
        </div>
        <LocationCard location={location} />
        <section style={{
          marginTop: "24px",
          background: "#1c1c1c",
          padding: "16px",
          borderRadius: "8px",
          color: "#fff",
          fontSize: "16px",
          lineHeight: "1.8",
        }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <strong>Status:</strong>
            <span style={{ color: connected ? "#00ff00" : "#ff4d4d" }}>{status}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <strong>Location:</strong>
            <span>{location}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <strong>IP Address:</strong>
            <span>{ip}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <strong>Uptime:</strong>
            <span>{elapsed}</span>
          </div>
        </section>

        <div className="action" style={{ marginTop: "28px" }}>
          <ConnectButton connected={connected} toggleConnection={handleToggleConnection} />
        </div>

        <ServerStatusPanel />
      </main>

      <footer
        className="footer"
        style={{
          padding: "16px",
          borderTop: "1px solid #333",
          textAlign: "center",
          fontSize: "14px",
        }}
      >
        ShadowVpn | Need help?{" "}
        <a href="#" style={{ color: "#00ffc8" }}>
          Contact Support
        </a>
      </footer>
      <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar closeOnClick pauseOnHover />
    </div>
  );
}
