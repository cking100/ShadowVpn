import "./ConnectButton.css";

export default function Connect({ connected, toggleConnection }) {
  return (
    <button
      className={`connect-btn ${connected ? "disconnect" : "connect"}`}
      onClick={toggleConnection}
    >
      {connected ? "Disconnect VPN" : "Connect VPN"}
    </button>
  );
}
