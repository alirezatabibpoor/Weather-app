"use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

export default function TemperatureChart({ extra }) {
  if (!extra?.hourly) return null;

  const chartData = extra.hourly.time
    .slice(0, 12)
    .map((time, index) => ({
      time: new Date(time).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      temp: Math.round(extra.hourly.temperature_2m[index]),
      feels: Math.round(
        extra.hourly.apparent_temperature?.[index] ??
          extra.hourly.temperature_2m[index]
      ),
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