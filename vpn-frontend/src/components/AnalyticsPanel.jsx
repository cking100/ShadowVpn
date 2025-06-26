import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import "./AnalyticsPanel.css";

export default function AnalyticsPanel({ data }) {
  const usage = data.reduce((acc, session) => {
    const time = session.day;
    acc[time] = (acc[time] || 0) + session.usage;
    return acc;
  }, {});

  const Data = Object.entries(usage).map(([time, usage]) => ({
    name: time,
    usage: +usage.toFixed(2)
  }));
  return (
    <div className="analytics-panel">
      <h3> Usage (GB)</h3>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={Data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis dataKey="name" stroke="#ccc" />
          <YAxis stroke="#ccc" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="usage"
            stroke="#00ffc8"
            strokeWidth={2}
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
