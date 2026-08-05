"use client"
import { weatherCodeToEmoji } from "@/app/utils/function";
import { useEffect, useState } from "react";
import { getCityDateTime } from "@/app/utils/function";
export default function Header({name , country ,timezone , extra})
{
  const [now , setnow]=useState(new Date());
  
  const weatherCode = extra?.current?.weather_code;
  const isDay = extra?.current?.is_day;
  console.log(extra.current);
  useEffect(()=>
  {
    const timer = setInterval(()=>{
      setnow(new Date())
    },1000)
    return ()=>clearInterval(timer)
  },[])
  const {date, time}  = getCityDateTime(now,timezone);
return(
  <>
 <div className= "m-4 dark:bg-gray-600 mt-3 rounded-2xl bg-white/10 p-3 text-center backdrop-blur hover:scale-105 transition duration-200">
  <p className="text-sm text-blue-100">
    Local Time
  </p>

  <h2 className="text-2xl font-bold">
    {time}
  </h2>

  <p className="text-sm">
    {date}
  </p>
</div>
    <div className="flex justify-evenly items-center">
        <div className="hover:scale-100 transition-all ">
          <h5 className="text-2xl font-bold">{name}</h5>
          <img
           src={`https://flagcdn.com/w40/${country.toLowerCase()}.png`}
           alt={country}
           className="animate-flag h-6 w-10 rounded object-cover mt-1.5 size-96"
           />
        </div>
    
        <div className="text-7xl animate-pulse">
           {weatherCodeToEmoji(weatherCode, isDay)}
        </div>
      </div>
     
  </>
      
)
}