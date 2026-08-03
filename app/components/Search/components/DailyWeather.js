export default function DailyWeather({ data , air}) {
  const quality = {
  1: "🟢 Excellent",
  2: "🟡 Fair",
  3: "🟠 Moderate",
  4: "🔴 Poor",
  5: "🟣 Very Poor",
};

const aqi = air?.list?.[0]?.main?.aqi



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

      <div className="
      flex
      items-center
      justify-between
      "
      >

        <div>

          <h1 className="
          text-6xl
          font-black
          drop-shadow-lg
          ">
            {Math.round(data.main.temp)}°
          </h1>


          <p className="
          mt-2
          text-lg
          capitalize
          text-white/80
          ">
            {data.weather[0].description}
          </p>

        </div>


        <img
        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
        className="
        h-32
        w-32
        animate-pulse
        "
        />

      </div>


      {/* Details */}

      <div className="
      mt-4
      grid
      grid-cols-1
      sm:grid-cols-2
      gap-4
      ">


        <InfoCard
        title="Humidity"
        value={`${data.main.humidity}%`}
        icon="💧"
        />


        <InfoCard
        title="Wind"
        value={`${data.wind.speed} m/s`}
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
      bg-white/10
      p-4
      text-center
      "
      >

        <p className="text-sm text-white/70">
          Wind Direction
        </p>


        <p className="
        mt-2
        text-2xl
        font-bold
        ">
          🧭 {data.wind.deg}°
        </p>


      </div>
      
      {aqi && (
  <div className="mt-6 rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-xl">
    <div className="flex items-center justify-between">
      <span className="text-lg font-semibold">🌫 Air Quality</span>

      <span
        className={`rounded-full px-4 py-1 font-bold ${
          aqi === 1
            ? "bg-green-500"
            : aqi === 2
            ? "bg-yellow-500"
            : aqi === 3
            ? "bg-orange-500"
            : aqi === 4
            ? "bg-red-500"
            : "bg-purple-600"
        }`}
      >
        {quality[aqi]}
      </span>
    </div>
  </div>
)}


    </div>

  )
}





function InfoCard({title,value,icon}){

return (

<div
className="
rounded-2xl
border
border-white/20
bg-white/10
p-4
transition
hover:bg-white/20
"
>

<p className="
text-sm
text-white/70
">
{icon} {title}
</p>


<p className="
mt-2
text-2xl
font-bold
">
{value}
</p>


</div>

)

}