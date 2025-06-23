// === Clock.jsx ===
import { useEffect, useState } from "react";
import "./Clock.css";

export default function Clock({ location, connected }) {
  const [time, setTime] = useState("--:--:--");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      // Simulate different timezones based on location
      const offset = location.includes("Tokyo") ? 9 : location.includes("London") ? 0 : -4;
      const localTime = new Date(now.getTime() + offset * 60 * 60 * 1000);
      const timeStr = localTime.toLocaleTimeString("en-US", { hour12: false });
      setTime(timeStr);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, [location]);

  return (
    <div className="clock">
      <h4>🕒 {connected ? `${location} Time: ${time}` : "Not Connected"}</h4>
    </div>
  );
}

