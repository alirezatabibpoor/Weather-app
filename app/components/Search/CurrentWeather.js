import Result from "../Result/result"
export default function CurrentWeather({loading , weather ,uv})
{
    return(
        <>
        {!loading && weather && (
          <div className="mt-12 flex justify-center">
          <Result
           name={weather.name}
           country={weather.sys.country}
           temperature={weather.main.temp}
           humidity={weather.main.humidity}
           condition={weather.weather[0].description}
           icon={weather.weather[0].icon}
           sunrise={weather.sys.sunrise}
           sunset={weather.sys.sunset}
           windSpeed={weather.wind.speed}
           windDirection={weather.wind.deg}
           pressure={weather.main.pressure}
           feelsLike={weather.main.feels_like}
           visibility={uv?.current?.visibility}
           clouds={weather.clouds.all}
           minTemp={uv?.daily?.temperature_2m_min?.[0]}
           maxTemp={uv?.daily?.temperature_2m_max?.[0]}
           uv={uv}
           timezone={weather.timezone}
/>
        </div>
      )}
        </>
    )
}