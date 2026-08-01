"use client";

import { useEffect, useState } from "react";
import Result from "../forecast/components/Result";

export default function Forecast() {
  const names = ["Washington", "London", "Madrid","Tehran"];

  const [weather, setWeather] = useState([]);

  useEffect(() => {
    const getWeather = async () => {
      const results = await Promise.all(
        names.map(async (city) => {
          const response = await fetch(
            `/api/weather?city=${city}&lang=en`
          );

          return response.json();
        })
      );

      setWeather(results);
    };

    getWeather();
  }, []);

  return (
    <div className="min-h-screen bg-linear-to-br from-sky-400 via-blue-500 to-indigo-700 dark:from-gray-400 dark:via-gray-600 dark:to-gray-900 px-6 py-12">

  <div className="mx-auto max-w-7xl">

    {/* Title */}
    <div className="mb-10 text-center text-white">
      <h1 className="text-4xl font-bold">
        🌍 Weather Forecast
      </h1>

      <p className="mt-3 text-white/80">
        Check the weather in popular cities around the world
      </p>
    </div>

    {/* Weather Cards */}
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

      {weather.map((item) => (
        <div
          key={item.id || item.name}
          className="group rounded-3xl border border-white/30 bg-white/20 p-1 shadow-2xl backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:bg-white/30"
        >
          <Result
            name={item.name}
            country={item.sys.country}
            temperature={item.main.temp}
            condition={item.weather[0].description}
            humidity={item.main.humidity}
            icon={item.weather[0].icon}
          />
        </div>
      ))}

    </div>

  </div>

</div>
  );
}