"use client";

import { weatherCodeToEmoji } from "@/app/utils/function";

export default function HourlyForecast({ hourly_weather }) {

  if (!hourly_weather) return null;

  return (
    <div className="flex gap-4 overflow-x-auto rounded-2xl bg-white/10 p-4 backdrop-blur-xl">

      {hourly_weather.hourly.time.slice(0, 12).map((time, index) => (

        <div
          key={time}
          className="hover:animate-pulse hover:scale-115 min-w-22.5 rounded-xl bg-white/10 p-3 text-center transition ease-in-out duration-500"
        >

          <p className="text-sm">
            {new Date(time).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>

          <div className="my-2 text-4xl animate-sway">
            {weatherCodeToEmoji(hourly_weather.hourly.weather_code[index])}
          </div>

          <p className="font-bold">
            {Math.round(hourly_weather.hourly.temperature_2m[index])}°
          </p>

          <p className="text-xs">
            💧 {hourly_weather.hourly.relative_humidity_2m[index]}%
          </p>

          <p className="text-xs">
            💨 {Math.round(hourly_weather.hourly.wind_speed_10m[index])} km/h
          </p>

        </div>

      ))}

    </div>
  );
}