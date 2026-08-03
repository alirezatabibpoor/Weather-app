import {
  getCloudStatus,
  getUVStatus,
  getUVColor,
  getSunProgress
} from "../../../utils/function";
import Compass from "./compass";
import '@/app/design.css'
import Humidity from "./Humidity";
import Sunmove from "./sunmove";
import WindSpeed from "./windSpeed";
import Feellike from "./Feelslike";
import Pressure from "./pressure";
import Visibility from "./visibility";
import CloudArea from "../components/clouds";
import Uvindex from "./uvIndex";
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
     <Humidity humidity={humidity} condition={condition}/>
     <Sunmove sunriseTime={sunriseTime} sunsetTime={sunsetTime} progress={progress}/>
      {/* Weather Details */}
      <div className="mt-6 grid grid-cols-2 gap-4">

      <WindSpeed windSpeed={windSpeed}/>

        <div className="rounded-2xl bg-white/10 p-4 text-center">
          <Compass windDirection={windDirection}/>
        </div>

     <Feellike feelsLike={feelsLike}/>

     <Pressure pressure={pressure}/>

     <Visibility visibility={visibility}/>

     <CloudArea clouds={clouds} getCloudStatus={getCloudStatus}/>  

     <Uvindex uv={uv} getUVColor={getUVColor} getUVStatus={getUVStatus}/>

   
     </div>
    </>
  );
}