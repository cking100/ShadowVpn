import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import DiagnosticsPanel from "./pages/DiagnosticsPanel";
import ConnectionHistory from "./pages/ConnectionHistory";
import Sidebar from "./components/Sidebar";
import { useLocation } from "react-router-dom";
import "./App.css"; 
import Settings from "./pages/Settings";

function Layout() {
  const location = useLocation();
  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      <Sidebar activePage={location.pathname} />
      <div style={{ flex: 1, overflowY: "auto" }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/connection" element={<ConnectionHistory />} />
          <Route path="/diagnostics" element={<DiagnosticsPanel />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}
