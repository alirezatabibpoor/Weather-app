"use client";

import { useState } from "react";
import ForecastRow from "./ForecastRow";
import WeatherMap from "../../weathermap/WeatherMap";
import Accordion from "../../Accordion";
import { MapIcon } from "lucide-react";
import AirQualityCard from "./AirQualityCard";
import Modal from "../../Modal/Modal";
import DailyWeather from "./DailyWeather";

export default function Footer({
  weather,
  air,
  forecast,
  loading,
  language,
  uv,
}) {
  const [selectedDay, setSelectedDay] = useState(null);

  const dailyForecast =
    forecast?.list?.filter((item) =>
      item.dt_txt.includes("12:00:00")
    ) || [];

  return (
    <div
      className="
      mx-auto mt-8
      flex w-full max-w-7xl flex-col gap-8
      transition duration-300
      hover:-translate-y-2
      hover:shadow-blue-500/40
      dark:hover:shadow-gray-500/40
    "
    >
      {/* Location */}
      {!loading && weather && (
        <div className="overflow-hidden rounded-3xl border border-white/20 bg-linear-to-br from-blue-500 via-blue-600 to-indigo-400 shadow-xl dark:from-gray-700 dark:via-gray-800 dark:to-gray-900">
          <Accordion
            title="📍 Location"
            icon={<MapIcon className="h-5 w-5 text-red-400" />}
          >
            <WeatherMap
              lat={weather.coord.lat}
              lon={weather.coord.lon}
              city={weather.name}
              temp={weather.main.temp}
            />
          </Accordion>
        </div>
      )}

      {/* Air Quality */}
      {!loading && air && (
        <div className="overflow-hidden rounded-3xl border border-white/20 bg-linear-to-br from-blue-500 via-blue-600 to-indigo-400 shadow-xl dark:from-gray-700 dark:via-gray-800 dark:to-gray-900">
          <Accordion title="🌫️ Air Quality" icon="🌫️">
            <AirQualityCard air={air} />
          </Accordion>
        </div>
      )}

      {/* Forecast */}
      {!loading && dailyForecast.length > 0 && (
        <div className="overflow-hidden rounded-3xl border border-white/20 bg-linear-to-br from-blue-500 via-blue-600 to-indigo-400 shadow-xl dark:from-gray-700 dark:via-gray-800 dark:to-gray-900">
          <Accordion title="5 Day Forecast" icon="☀️">
            <div className="flex flex-col divide-y divide-white/10">

              {dailyForecast.map((item, index) => (
                <ForecastRow
                  key={item.dt}
                  day={new Date(item.dt_txt).toLocaleDateString(
                    language === "fa" ? "fa-IR" : "en-US",
                    {
                      weekday: "long",
                    }
                  )}
                  icon={item.weather[0].icon}
                  condition={item.weather[0].description}
                  humidity={item.main.humidity}
                  maxTemp={uv?.daily?.temperature_2m_max?.[index]}
                  minTemp={uv?.daily?.temperature_2m_min?.[index]}
                  active={selectedDay === index}
                  onClick={() => setSelectedDay(index)}
                />
              ))}

            </div>
          </Accordion>
        </div>
      )}

      {/* Modal */}
      {selectedDay !== null && (
        <Modal close={() => setSelectedDay(null)}>
          <DailyWeather
            data={dailyForecast[selectedDay]}
            air={air}
            uv={uv}
            minTemp={uv?.daily?.temperature_2m_min?.[selectedDay]}
            maxTemp={uv?.daily?.temperature_2m_max?.[selectedDay]}
          />
        </Modal>
      )}
    </div>
  );
}