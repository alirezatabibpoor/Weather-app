"use client";

export default function Result({
  name,
  country,
  temperature,
  condition,
  humidity,
  icon,
}) {
  return (
    <div
      className="
      rounded-3xl 
      bg-white/10 
      p-6 
      text-white
      backdrop-blur-xl
      "
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">
            {name}
          </h2>

        <img
          src={`https://flagcdn.com/w80/${country.toLowerCase()}.png`}
          alt={country}
          className="mt-2 h-8 w-12 rounded object-cover"
/>
        </div>

        <img
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={condition}
          className="h-20 w-20"
        />
      </div>


      {/* Temperature */}
      <div className="mt-6 text-center">
        <p className="text-6xl font-bold">
          {Math.round(temperature)}°
        </p>

        <p className="mt-2 capitalize text-lg text-white/80">
          {condition}
        </p>
      </div>


      {/* Details */}
      <div className="mt-8 grid grid-cols-2 gap-4">

        <div
          className="
          rounded-2xl 
          bg-white/10 
          p-4 
          text-center
          "
        >
          <p className="text-sm text-white/60">
            Humidity
          </p>

          <p className="mt-1 text-xl font-bold">
            {humidity}%
          </p>
        </div>


        <div
          className="
          rounded-2xl 
          bg-white/10 
          p-4 
          text-center
          "
        >
          <p className="text-sm text-white/60">
            Condition
          </p>

          <p className="mt-1 text-xl font-bold capitalize">
            {condition}
          </p>
        </div>

      </div>

    </div>
  );
}