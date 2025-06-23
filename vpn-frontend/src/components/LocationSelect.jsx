import "./LocationSelect.css";

export default function LocationSelect({ selected, onChange }) {
  const locations = [
    { name: "New York, USA", timezone: "America/New_York" },
    { name: "London, UK", timezone: "Europe/London" },
    { name: "Tokyo, Japan", timezone: "Asia/Tokyo" },
    { name: "Mumbai, India", timezone: "Asia/Kolkata" },
  ];

  return (
    <div className="location-select">
      <label htmlFor="location">Location:</label>
      <select
        id="location"
        value={selected}
        onChange={(e) => onChange(e.target.value)}
      >
        {locations.map((loc) => (
          <option key={loc.name} value={loc.name}>
            {loc.name}
          </option>
        ))}
      </select>
    </div>
  );
}
