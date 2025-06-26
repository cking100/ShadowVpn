import "./DaignosticsPanel.css";

export default function DiagnosticsPanel({ connected }) {
  return (
    <div className="diagnostics">
      <h4> Diagnostics</h4>
      <ul>
      <li>DNS Leak: {connected ? " Safe" : " N/A"}</li>
      <li>IP Leak: {connected ? " Safe" : " N/A"}</li>
      <li>Kill Switch: {connected ? " Enabled" : " Disabled"}</li>
      </ul>
    </div>
  );
}
