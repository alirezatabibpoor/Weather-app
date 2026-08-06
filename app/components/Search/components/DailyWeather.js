"use client";

import { getAQIColor } from "@/app/utils/function";

export default function DailyWeather({
  data,
  extra,
}) {

  const quality = {
    1: "🟢 Excellent",
    2: "🟡 Fair",
    3: "🟠 Moderate",
    4: "🔴 Poor",
    5: "🟣 Very Poor",
  };


  


  // تاریخ روز انتخاب‌شده از OpenWeather
  const selectedDate = data?.dt_txt?.split(" ")?.[0];


  // پیدا کردن همان تاریخ داخل Open-Meteo
  const dailyIndex =
    selectedDate && extra?.daily?.time
      ? extra.daily.time.findIndex(
          (date) => date === selectedDate
        )
      : -1;


  // Max temperature
  const maxTemp =
    dailyIndex !== -1
      ? extra?.daily?.temperature_2m_max?.[dailyIndex]
      : undefined;


  // Min temperature
  const minTemp =
    dailyIndex !== -1
      ? extra?.daily?.temperature_2m_min?.[dailyIndex]
      : undefined;
const aqi = dailyIndex!== -1
? extra?.hourly?.us_aqi[dailyIndex]:undefined;
  return (

    <div
      className="
      w-full
      max-w-xl
      rounded-3xl
      border
      border-white/20
      bg-linear-to-br
      from-sky-400
      via-blue-600
      to-indigo-800
      dark:from-gray-500
      dark:via-gray-700
      dark:to-gray-900
      p-6
      text-white
      shadow-2xl
      backdrop-blur-xl
      "
    >


      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <h1
            className="
            text-6xl
            font-black
            drop-shadow-lg
            "
          >
            {Math.round(data.main.temp)}°
          </h1>


          <p
            className="
            mt-2
            text-lg
            capitalize
            text-white/80
            "
          >
            {data.weather[0].description}
          </p>


          {/* Date */}

          {selectedDate && (

            <p
              className="
              mt-2
              text-sm
              font-medium
              text-white/60
              "
            >
              📅 {selectedDate}
            </p>

          )}

        </div>


        <img
          src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
          alt={data.weather[0].description}
          className="
          h-32
          w-32
          animate-pulse
          "
        />

      </div>



      {/* Max & Min */}

      <div
        className="
        mt-6
        grid
        grid-cols-1
        gap-4
        sm:grid-cols-2
        "
      >

        <InfoCard
          title="Maximum"
          value={
            Number.isFinite(maxTemp)
              ? `${Math.round(maxTemp)}°`
              : "--"
          }
          icon="🔥"
        />


        <InfoCard
          title="Minimum"
          value={
            Number.isFinite(minTemp)
              ? `${Math.round(minTemp)}°`
              : "--"
          }
          icon="❄️"
        />

      </div>



      {/* Details */}

      <div
        className="
        mt-4
        grid
        grid-cols-1
        gap-4
        sm:grid-cols-2
        "
      >


        <InfoCard
          title="Humidity"
          value={`${data.main.humidity}%`}
          icon="💧"
        />


        <InfoCard
          title="Wind"
          value={`${extra?.daily?.wind_speed_10m_max[dailyIndex]} m/s`}
          icon="🌬️"
        />


        <InfoCard
          title="Pressure"
          value={`${data.main.pressure} hPa`}
          icon="📈"
        />


        <InfoCard
          title="Clouds"
          value={`${data.clouds.all}%`}
          icon="☁️"
        />

      </div>



      {/* Wind Direction */}

      <div
        className="
        mt-5
        rounded-2xl
        border
        border-white/10
        bg-white/10
        p-4
        text-center
        transition
        hover:bg-white/20
        "
      >

        <p className="text-sm text-white/70">
          Wind Direction
        </p>


        <p
          className="
          mt-2
          text-2xl
          font-bold
          "
        >
          🧭 {extra?.daily?.wind_direction_10m_dominant[dailyIndex]}°
        </p>

      </div>



      {/* Air Quality */}

      {aqi && (

        <div
          className="
          mt-6
          rounded-2xl
          border
          border-white/20
          bg-white/10
          p-5
          backdrop-blur-xl
          "
        >

          <div
            className="
            flex
            items-center
            justify-between
            "
          >

            <span className="text-lg font-semibold">
              🌫 Air Quality
            </span>


            <span
              className={`
              rounded-full
              px-4
              py-1
              font-bold

              ${
                getAQIColor(aqi)
              }

              `}
            >

              {aqi}

            </span>

          </div>

        </div>

      )}

    </div>

  );
}



function InfoCard({
  title,
  value,
  icon
}) {

  return (

    <div
      className="
      rounded-2xl
      border
      border-white/20
      bg-white/10
      p-4
      transition
      duration-300
      hover:scale-[1.02]
      hover:bg-white/20
      "
    >

      <p
        className="
        text-sm
        text-white/70
        "
      >

        {icon} {title}

      </p>


      <p
        className="
        mt-2
        text-2xl
        font-bold
        "
      >

        {value}

      </p>

    </div>

  );

}