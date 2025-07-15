import { useState, useEffect } from "react";
import Header from "../components/Header";
import "./Settings.css";

export default function Settings() {
  const [location, setLocation] = useState("New York, USA");
  const [connect, setConnect] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const datalist = JSON.parse(localStorage.getItem("vpn-settings"));
    if (datalist) {
      setLocation(datalist.location);
      setConnect(datalist.autoConnect);
      setTheme(datalist.theme);
    }
  }, []);

  const Save = () => {
    localStorage.setItem(
      "vpn-settings",
      JSON.stringify({
        location,
        autoConnect: connect,
        theme,
      })
    );
    alert("✅ Settings saved successfully!");
  };

  return (
    <div className="wrapper" style={{ display: "flex", height: "100vh", flexDirection: "column" }}>
      <Header />
      <div className="settings-container">
        <h2>Settings</h2>

        <div className="setting-group">
          <label>Choose a Location</label>
          <select value={location} onChange={(e) => setLocation(e.target.value)}>
            <option>New York, USA</option>
            <option>London, UK</option>
            <option>Tokyo, Japan</option>
            <option>Berlin, Germany</option>
            <option>Mumbai, India</option>
          </select>
        </div>

        <div className="setting-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={connect}
              onChange={(e) => setConnect(e.target.checked)}
            />
            Connect on startup
          </label>
        </div>

        <div className="setting-group">
          <label>Theme</label>
          <select value={theme} onChange={(e) => setTheme(e.target.value)}>
            <option value="dark">Dark</option>
            <option value="light">Light</option>
          </select>
        </div>

        <button className="save-button" onClick={Save}>
          💾 Save Settings
        </button>
      </div>
    </div>
  );
}
