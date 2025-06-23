import "./StatusCard.css";

export default function StatusCard({ label, value }) {
  return (
    <div className="status-card">
      <p className="label">{label}</p>
      <h3 className="value">{value}</h3>
    </div>
  );
}
