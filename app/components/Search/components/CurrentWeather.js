import Result from "../../Result/result"
export default function CurrentWeather({loading , weather ,extra, forecast})
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
           condition={extra?.current?.weather_code}
           icon={weather.weather[0].icon}
           sunrise={weather.sys.sunrise}
           sunset={weather.sys.sunset}
           windSpeed={weather.wind.speed}
           windDirection={weather.wind.deg}
           pressure={weather.main.pressure}
           feelsLike={weather.main.feels_like}
           visibility={extra?.current?.visibility}
           clouds={weather.clouds.all}
           minTemp={extra?.daily?.temperature_2m_min?.[0]}
           maxTemp={extra?.daily?.temperature_2m_max?.[0]}
           extra={extra}
           timezone={weather.timezone}
           forecast={forecast}
          

           
/>
        </div>
      )}
        </>
    )
}