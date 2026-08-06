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
          temperature={extra?.current?.temperature_2m}
          humidity={extra?.current?.relative_humidity_2m}
          condition={extra?.current?.weather_code}
          icon={weather.weather[0].icon}
          sunrise={weather.sys.sunrise}
          sunset={weather.sys.sunset}
          windSpeed={extra?.current?.wind_speed_10m}
          windDirection={extra?.current?.wind_direction_10m}
          pressure={extra?.current?.pressure_msl}
          feelsLike={extra?.current?.apparent_temperature}
          visibility={extra?.current?.visibility}
          clouds={extra?.current?.cloud_cover}
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