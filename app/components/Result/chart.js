"use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ReferenceDot,
  defs,
  linearGradient,
  stop,
} from "recharts";

export default function TemperatureChart({
  minTemp,
  temperature,
  maxTemp,
}) {
  const data = [
    {
      name: "Min",
      temp: Math.round(minTemp),
    },
    {
      name: "Now",
      temp: Math.round(temperature),
    },
    {
      name: "Max",
      temp: Math.round(maxTemp),
    },
  ];

  return (
    <div className="mt-6 rounded-3xl bg-white/10 backdrop-blur-2xl p-6 shadow-2xl border border-white/10">

      <h2 className="text-center text-xl font-bold text-white mb-6">
        🌡 Temperature Trend
      </h2>

      <div className="h-64">

        <ResponsiveContainer width="100%" height="100%">

          <AreaChart data={data}>

            <defs>

              <linearGradient
                id="temperatureGradient"
                x1="0"
                y1="0"
                x2="1"
                y2="0"
              >
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="35%" stopColor="#22c55e" />
                <stop offset="65%" stopColor="#facc15" />
                <stop offset="100%" stopColor="#ef4444" />
              </linearGradient>

              <linearGradient
                id="areaGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="0%" stopColor="#38bdf8" stopOpacity={0.45} />
                <stop offset="100%" stopColor="#38bdf8" stopOpacity={0} />
              </linearGradient>

            </defs>

            <XAxis
              dataKey="name"
              tick={{
                fill: "white",
                fontSize: 14,
              }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              hide
              domain={[
                Math.floor(minTemp - 3),
                Math.ceil(maxTemp + 3),
              ]}
            />

            <Tooltip
              cursor={false}
              contentStyle={{
                background: "rgba(30,41,59,.95)",
                borderRadius: "18px",
                border: "1px solid rgba(255,255,255,.15)",
                color: "white",
                backdropFilter: "blur(20px)",
              }}
              formatter={(value) => [`${value}°C`, "Temperature"]}
            />

            <Area
              type="monotone"
              dataKey="temp"
              stroke="url(#temperatureGradient)"
              fill="url(#areaGradient)"
              strokeWidth={5}
              animationDuration={1500}
              animationEasing="ease-out"
              dot={{
                r: 7,
                strokeWidth: 3,
                fill: "#ffffff",
                stroke: "#38bdf8",
              }}
              activeDot={{
                r: 10,
                fill: "#facc15",
              }}
            />

            <ReferenceDot
              x="Now"
              y={Math.round(temperature)}
              r={13}
              fill="#fde047"
              stroke="#fff"
              strokeWidth={4}
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

      <div className="mt-6 grid grid-cols-3 gap-4">

        <div className="rounded-2xl bg-white/10 p-3 text-center">

          <p className="text-sm text-blue-100">
            🔻 Min
          </p>

          <h3 className="text-2xl font-bold text-cyan-300">
            {Math.round(minTemp)}°
          </h3>

        </div>

        <div className="rounded-2xl bg-white/15 p-3 text-center border border-yellow-300/40 shadow-lg shadow-yellow-300/20">

          <p className="text-sm text-yellow-200">
            Current
          </p>

          <h3 className="animate-pulse text-3xl font-extrabold text-yellow-300">
            {Math.round(temperature)}°
          </h3>

        </div>

        <div className="rounded-2xl bg-white/10 p-3 text-center">

          <p className="text-sm text-blue-100">
            🔺 Max
          </p>

          <h3 className="text-2xl font-bold text-red-300">
            {Math.round(maxTemp)}°
          </h3>

        </div>

      </div>

    </div>
  );
}