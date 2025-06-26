
import "./ConnectionHistory.css";

export default function ConnectionHistory({ logs = [] }) {
  return (
    <div className="panel">
      <h3>Connection History</h3>
      <ul>
        {logs.length === 0 ? (
          <li>No history yet.</li>
        ) : (
          logs.map((log, idx) => <li key={idx}>{log}</li>)
        )}
      </ul>
    </div>
  );
}
