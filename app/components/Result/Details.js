import {
  getWindDirection,
  getCloudStatus,
  getUVStatus,
  getUVColor,
  getSunProgress
} from "../../utils/function";
import Progress from "../progress";
import Compass from "./compass";
import '@/app/design.css'
import {Eye , Cloud , DropletIcon , Wind , Thermometer , Sun , Gauge} from 'lucide-react'
export default function Details({
  humidity,
  condition,
  windSpeed,
  windDirection,
  feelsLike,
  pressure,
  visibility,
  clouds,
  sunrise,
  sunset,
  uv
}) {

  const progress = getSunProgress(sunrise,sunset)

  const sunriseTime = new Date(sunrise*1000).toLocaleDateString([],{hour:"2-digit",minute:"2-digit"});
  const sunsetTime = new Date(sunset * 1000).toLocaleTimeString([], {
  hour: "2-digit",
  minute: "2-digit",
});
  return (
    <>
      {/* Humidity & Condition */}
      <div className="flex items-center justify-evenly rounded-2xl bg-white/15 p-4 backdrop-blur-sm">
        <div className="hover:animate-pulse hover:scale-120 duration-500 text-center">
          <p className=" text-md font-bold text-blue-100">Humidity</p>
          <p className="mt-1 text-xl font-bold">{humidity}%</p>
          <DropletIcon className="text-blue-50 mb-1 animate-drop m-auto" size={24}/>
          <Progress percent={humidity}/>
        </div>


        <div className="h-10 w-px bg-white/30"></div>

        <div className="text-center">
          <p className="text-lg font-bold text-blue-100">Condition</p>
          <p className="mt-1 text-xl font-bold">{condition}</p>
        </div>
      </div>

      {/* Sunrise & Sunset */}
   
<div className="mt-2 rounded-2xl bg-white/10 p-5 backdrop-blur-xl">
  <div className="flex justify-between text-sm mb-6">
    <span className="font-bold">🌅 {sunriseTime}</span>
    <span className="font-bold">🌇 {sunsetTime}</span>
  </div>

  <div className="relative h-2 rounded-full bg-white/20">
    <div className="hover:bg-amber-100 transition ease-linear duration-300 absolute inset-y-0 left-0 rounded-full bg-yellow-400"
      style={{ width: `${progress}%` }}
    />
    <div
      className="absolute -top-4 transition-all duration-1000"
      style={{
        left: `calc(${progress}% - 14px)`
      }}
    >
      ☀️
    </div>
  </div>
</div>
      {/* Weather Details */}
      <div className="mt-6 grid grid-cols-2 gap-4">

        <div className="rounded-2xl bg-white/10 p-4 text-center">
           <p className="font-bold">🌬️ Wind Speed</p>

      <div className="my-4 flex justify-center">
      <Wind
      size={42}
      className="animate-sway mx-auto animate-sway text-cyan-300"
      />
    </div>

  <p className="text-xl font-bold">
    {windSpeed} m/s
  </p>
</div>

        <div className="rounded-2xl bg-white/10 p-4 text-center">
          <Compass windDirection={windDirection}/>
        </div>

        <div className="rounded-2xl bg-white/10 p-4 text-center">
          <Thermometer
             size={42}
             className="mx-auto mb-3 text-white hover:text-red-500 transition ease-in duration-700"
          />
          <p className=""><p className=""></p> Feels Like</p>
          <p className="text-xl font-bold">
            {Math.round(feelsLike)}°C
          </p>
        </div>

        <div className="rounded-2xl bg-white/10 p-4 text-center">
        <Gauge
          size={42}
           className="mx-auto my-3 text-emerald-300 transition-all duration-1200 hover:rotate-360"
           style={{
               transform: `rotate(${(pressure - 980) * 0.6}deg)`,
               }}
/>
          <p className="">📈 Pressure</p>
          <p className="text-xl font-bold">{pressure} hPa</p>
        </div>

        <div className="rounded-2xl bg-white/10 p-4 text-center">

  <p className="font-bold">
    Visibility
     <div className="my-3 flex justify-center">
    <Eye
      size={42}
      className="animate-blink text-cyan-300"
    />
   </div>
  </p>

 

  <p className="text-xl font-bold">
    {visibility / 1000} km
  </p>

</div>
        <div className="rounded-2xl bg-white/10 p-4 text-center">
          <p> Cloud Cover</p>
            <Cloud
            size={42}
            className="mx-auto my-4 text-slate-200 animate-cloud"
  />
          <p className="text-xl font-bold">
            {clouds}% - {getCloudStatus(clouds)}
          </p>
        </div>



    <div className="rounded-2xl bg-white/10 p-5 text-center backdrop-blur-xl">

  <p className="mb-3 text-sm font-semibold text-blue-100 ">
    ☀️ UV Index
  </p>


  <div className="mb-4 flex justify-center">
    <Sun
      size={46}
      className={`text-yellow-400 transition-all duration-500 hover:rotate-180 ${getUVColor(
        uv?.current?.uvi
      )
        .replace("bg-", "text-")}`}
    />
  </div>

  <p className="text-2xl font-bold">
    {uv?.current?.uvi?.toFixed(1)}
  </p>

  <p className="mb-2 text-sm text-blue-100">
    {getUVStatus(uv?.current?.uvi)}
  </p>

  <Progress
    percent={(uv?.current?.uvi / 11) * 100}
    color={getUVColor(uv?.current?.uvi)}
  />

</div>
      </div>
    </>
  );
}