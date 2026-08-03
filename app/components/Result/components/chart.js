"use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

export default function TemperatureChart({ forecast }) {
  if (!forecast?.list) return null;

  const chartData = forecast.list.slice(0,12).map((item) => ({
    time: new Date(item.dt * 1000).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),
    temp: Math.round(item.main.temp),
    feels: Math.round(item.main.feels_like),
  }));

  return (
    <div className="rounded-3xl bg-white/10 p-6 backdrop-blur-xl">
      <h2 className="mb-6 text-center text-2xl font-bold text-white">
        🌡️ Temperature Throughout the Day
      </h2>

      <ResponsiveContainer width="100%" height={320}>
        <AreaChart data={chartData}>
          <defs>
            <linearGradient id="tempGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#DCDCE0" stopOpacity={0.9} />
              <stop offset="95%" stopColor="#A5A5A3" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="4 4" stroke="#ffffff20" />

          <XAxis
            dataKey="time"
            tick={{ fill: "white", fontSize: 12 }}
          />

          <Tooltip
            contentStyle={{
              background: "#1e293b",
              border: "none",
              borderRadius: 15,
              color: "white",
            }}
          />

          <Area
            type="monotone"
            dataKey="temp"
            stroke="#C2311E"
            strokeWidth={4}
            fill="url(#tempGradient)"
            animationDuration={1500}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}