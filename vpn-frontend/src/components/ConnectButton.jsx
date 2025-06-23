import "./ConnectButton.css";

export default function ConnectButton({ connected, toggleConnection }) {
  return (
    <button
      className={`connect-btn ${connected ? "disconnect" : "connect"}`}
      onClick={toggleConnection}
    >
      {connected ? "Disconnect VPN" : "Connect VPN"}
    </button>
  );
}
