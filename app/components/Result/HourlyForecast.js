export default function HourlyForecast({forecast})
{
    return(
        <div className="flex gap-4 overflow-x-auto rounded-2xl bg-white/10 p-4 backdrop-blur-xl">

      {forecast?.list.slice(0, 8).map((item) => (
        <div
          key={item.dt}
          className="hover:animate-pulse hover:scale-115 min-w-22.5 transition ease-in-out duration-500 rounded-xl bg-white/10 p-3 text-center"
        >
          <p className="text-sm">
            {new Date(item.dt * 1000).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>

          <img
            src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
            className="animate-cloud mx-auto w-12"
          />

          <p className="font-bold">
            {Math.round(item.main.temp)}°
          </p>

          <p className="text-xs">
            💧 {item.main.humidity}%
          </p>

          <p className="text-xs">
            💨 {item.wind.speed} m/s
          </p>
        </div>
      ))}

    </div>
    )
}