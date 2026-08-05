"use client";

import { weatherCodeToEmoji , weatherCodeToText } from "@/app/utils/function";

export default function HourlyForecast({ extra , condition }) {

  if (!extra?.hourly) return null;

  const getAQIStyle = (aqi) => {
    if (aqi <= 50)
      return {
        text: "Good",
        icon: "🟢",
        color: "text-green-300",
      };

    if (aqi <= 100)
      return {
        text: "Moderate",
        icon: "🟡",
        color: "text-yellow-300",
      };

    if (aqi <= 150)
      return {
        text: "Unhealthy",
        icon: "🟠",
        color: "text-orange-300",
      };

    return {
      text: "Bad",
      icon: "🔴",
      color: "text-red-300",
    };
  };


  return (
    <div className="
      flex 
      gap-4 
      overflow-x-auto 
      rounded-3xl 
      bg-white/10 
      p-5 
      backdrop-blur-xl
      scrollbar-hide
    ">

      {extra.hourly.time.slice(0,24).map((time,index)=>{

        const aqi = extra.hourly.us_aqi[index];
        const aqiStatus = getAQIStyle(aqi);


        return (

        <div
          key={time}
          className="
          min-w-28
          rounded-2xl
          bg-white/10
          border
          border-white/20
          p-4
          text-center
          shadow-lg
          backdrop-blur-md
          transition-all
          duration-500
          hover:scale-110
          hover:bg-white/20
          "
        >

          <p className="text-sm text-blue-100">
            {new Date(time).toLocaleTimeString([], {
              hour:"2-digit",
              minute:"2-digit",
            })}
          </p>


          <div className="
            my-3
            text-5xl
            animate-sway
            drop-shadow-lg
          ">
            {weatherCodeToEmoji(
              extra.hourly.weather_code[index],
              extra.hourly.is_day[index]
            )}
          </div>


          <p className="text-2xl font-bold">
            {Math.round(
             extra.hourly.temperature_2m[index]
            )}°
          </p>


          <div className="
            mt-3
            space-y-1
            text-xs
            text-gray-200
          ">

            <p className="font-bold">
               {weatherCodeToText(extra.hourly.weather_code[index])}
            </p>

            <p>
              💧 {extra.hourly.relative_humidity_2m[index]}%
            </p>


            <p>
              💨 {Math.round(
                extra.hourly.wind_speed_10m[index]
              )} km/h
            </p>


            <div className="
              mt-3
              rounded-xl
              bg-black/20
              p-2
            ">

              <p>
                🌫️ {aqi} AQI
              </p>

              <p className={`font-semibold ${aqiStatus.color}`}>
                {aqiStatus.icon} {aqiStatus.text}
              </p>

            </div>


          </div>


        </div>

        )

      })}

    </div>
  );
}