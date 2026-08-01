export default function ForecastCard({
  day,
  temperature,
  condition,
  humidity,
  icon,
}) {
  return (
    <div className="bg-linear-to-r dark:from-gray-400 dark:to-gray-900 group rounded-3xl border border-white/20 bg-white/15 p-6 text-center text-white shadow-xl backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:scale-105 hover:bg-white/20">

      {/* Day */}
      <h2 className="text-xl font-bold">
        {day}
      </h2>

      {/* Weather Icon */}
      <img
        src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
        alt={condition}
        className="mx-auto h-24 w-24"
      />

      {/* Temperature */}
      <h1 className="text-5xl font-extrabold">
        {Math.round(temperature)}°
      </h1>

      {/* Condition */}
      <p className="mt-2 text-white/80 capitalize">
        {condition}
      </p>

      {/* Humidity */}
      <div className="mt-5 rounded-2xl bg-white/10 p-3">
        <p className="text-sm text-white/70">
          Humidity
        </p>

        <p className="text-xl font-bold">
          💧 {humidity}%
        </p>
      </div>
    </div>
  );
}