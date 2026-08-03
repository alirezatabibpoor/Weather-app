import Details from './Details';
import Header from './header';
import Tempreature from './Temperature';
import Accordion from '../Accordion';
import HourlyForecast from './HourlyForecast';
import useWeathear from '@/app/hooks/useWeather';
export default function Result({
  name,
  country,
  temperature,
  condition,
  humidity,
  icon,
  sunrise,
  sunset,
  windSpeed,
  windDirection,
  pressure,
  feelsLike,
  visibility,
  clouds,
  minTemp,
  maxTemp,
  uv,
  timezone
}) {
  const {forecast} = useWeathear()

  return (
    <div className="w-fit overflow-hidden rounded-3xl bg-linear-to-br from-blue-500 via-blue-600 to-indiego-400 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 text-white shadow-2xl transition duration-300
hover:-translate-y-2
hover:shadow-blue-500/40 dark:hover:shadow-gray-500/40
">
      <Header country={country} name={name} icon={icon} condition={condition} timezone={timezone}/>
      {/* Temperature */}
      <Tempreature temperature={temperature} maxTemp={maxTemp} minTemp={minTemp} condition={condition} forecast={forecast}/>
      
      <Accordion
       title="Weather Details"
       icon="🌤️"
      >
  <Details
    humidity={humidity}
    sunrise={sunrise}
    sunset={sunset}
    windSpeed={windSpeed}
    windDirection={windDirection}
    pressure={pressure}
    feelsLike={feelsLike}
    visibility={visibility}
    clouds={clouds}
    uv={uv}
  />
</Accordion>

<Accordion
  title="Hourly Forecast"
  icon="🕒"
>
  <HourlyForecast forecast={forecast} />
</Accordion>

    </div>
  );
}