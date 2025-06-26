import { useState, useEffect } from "react";
import Header from "../components/Header";
import "./Settings.css";

export default function Settings() {
  const [Location, setLocation] = useState("New York, USA");
  const [Connect, setConnect] = useState(false);
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
      location: Location,
      Connect,
      theme,
      })
    );
    alert("Settings saved");
  };

  return (
    <div className="wrapper" style={{ display: "flex", height: "95vh" }}>
      <div className="main" style={{ flex: 1, padding: "20px" }}>
      <Header />
      <h2 style={{ color: "#fff" }}>Settings</h2>
        <div className="section">
          <label>Choose A  Location:</label>
            <select value={Location} onChange={(e) => setLocation(e.target.value)}>
            <option>New York, USA</option>
            <option>London, UK</option>
            <option>Tokyo, Japan</option>
            <option>Berlin, Germany</option>
             <option>Mumbai, India</option>
          </select>
        </div>

        <div className="section">
          <label>
            <input type="checkbox" checked={Connect} onChange={(e) => setConnect(e.target.checked)} />
        connect on startup
          </label>
        </div>

        <div className="section">
          <label>Theme</label>
          <select value={theme} onChange={(e) => setTheme(e.target.value)}>
            <option value="dark">Dark</option>
              <option value="light">Light</option>
          </select>
        </div>
        <button className="savebtn" onClick={Save}>Save Settings</button>
      </div>
    </div>
  );
}
