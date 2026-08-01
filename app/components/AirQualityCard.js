import Progress from "./progress";
import {
  getPollutantColor,
  getPollutantPercent,
} from "@/app/utils/function";

export default function AirQualityCard({ air }) {
  const quality = {
    1: "🟢 Excellent",
    2: "🟡 Fair",
    3: "🟠 Moderate",
    4: "🔴 Poor",
    5: "🟣 Very Poor",
  };
   const pollutants = [
    {
      label: "PM2.5",
      value: air.list[0].components.pm2_5,
      max: 100,
    },
    {
      label: "PM10",
      value: air.list[0].components.pm10,
      max: 150,
    },
    {
      label: "CO",
      value: air.list[0].components.co,
      max: 10000,
    },
    {
      label: "O₃",
      value: air.list[0].components.o3,
      max: 300,
    },
    {
      label: "NO₂",
      value: air.list[0].components.no2,
      max: 200,
    },
    {
      label: "SO₂",
      value: air.list[0].components.so2,
      max: 100,
    },
  ];
  const aqi = air.list[0].main.aqi;
  return (
    <div className="dark:from-gray-800 dark:via-gray-600 dark:to-gray-500 mt-6 rounded-3xl bg-linear-to-r from-sky-400/70 via-blue-500/70 to-indigo-700/70 p-6 text-white shadow-xl backdrop-blur-xl">
      {/* AQI */}

      <div className="dark:bg-gray-500 mb-6 rounded-2xl bg-white/10 p-4">

        <div className="mb-2 flex items-center justify-between">
          <span className="font-monospace">
            AQI
          </span>

          <span className="font-bold">
            {quality[aqi]}
          </span>
        </div>

        <Progress
          percent={(aqi / 5) * 100}
          color={getPollutantColor(aqi * 20)}
        />
      </div>

      {/* Pollutants */}

      <div className="space-y-5">

        {pollutants.map((item) => (
          <div key={item.label}>

            <div className="mb-2 flex justify-between">

              <span>{item.label}</span>

              <span className="font-semibold">
                {item.value.toFixed(1)}
              </span>

            </div>

            <Progress
              percent={getPollutantPercent(
                item.value,
                item.max
              )}
              color={getPollutantColor(item.value)}
            />

          </div>
        ))}

      </div>

    </div>
  );
}