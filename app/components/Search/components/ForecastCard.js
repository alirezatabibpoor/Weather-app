export default function ForecastCard({
  day,
  temperature,
  condition,
  humidity,
  icon,
  onClick
}) {

  return (

    <div
    onClick={onClick}
    className="
    cursor-pointer
    group
    rounded-3xl
    border
    border-white/20
    bg-linear-to-br
    from-white/20
    via-white/10
    to-white/5
    p-6
    text-center
    text-white
    shadow-xl
    backdrop-blur-xl
    transition
    duration-500
    hover:-translate-y-3
    hover:scale-105
    hover:shadow-blue-400/40
    dark:hover:shadow-gray-400/40
    "
    >

      {/* Day */}

      <h2 className="
      text-xl
      font-extrabold
      capitalize
      tracking-wide
      ">
        {day}
      </h2>


      {/* Icon */}

      <div className="
      my-3
      rounded-full
      bg-white/10
      p-2
      transition
      group-hover:scale-110
      ">
        <img
          src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
          alt={condition}
          className="animate-sway transition duration-3000 mx-auto h-24 w-24"
        />
      </div>



      {/* Temperature */}

      <h1 className="
      text-5xl
      font-black
      drop-shadow-lg
      ">
        {Math.round(temperature)}°
      </h1>



      {/* Condition */}

      <p className="
      mt-2
      capitalize
      text-white/80
      ">
        {condition}
      </p>



      {/* Humidity */}

      <div
      className="
      mt-5
      rounded-2xl
      bg-white/15
      p-3
      border
      border-white/10
      transition
      hover:bg-white/25
      "
      >

        <p className="
        text-sm
        text-white/70
        ">
          Humidity
        </p>


        <p className="
        text-xl
        font-extrabold
        ">
          💧 {humidity}%
        </p>

      </div>


    </div>

  );
}