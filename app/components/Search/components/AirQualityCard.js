"use client";

import Progress from "../../progress";

import {
  getPollutantColor,
  getPollutantPercent,
  getAQIColor,
  getAQIStatus,
  getAQIPercent
} from "@/app/utils/function";


import {
  Wind,
  Cloud,
  Factory,
  Flame,
  Droplets,
  Activity,
} from "lucide-react";



export default function AirQualityCard({ air, extra }) {


  if (!air) return null;



  // Open Meteo US AQI
  const aqi =
    extra?.hourly?.us_aqi?.[0] ?? null;



  const components =
    air?.list?.[0]?.components;



  if(!components) return null;



  const pollutants = [

    {
      label:"PM2.5",
      value:components.pm2_5,
      max:100,
      icon:<Wind size={22}/>
    },


    {
      label:"PM10",
      value:components.pm10,
      max:150,
      icon:<Cloud size={22}/>
    },


    {
      label:"CO",
      value:components.co,
      max:10000,
      icon:<Factory size={22}/>
    },


    {
      label:"O₃",
      value:components.o3,
      max:300,
      icon:<Activity size={22}/>
    },


    {
      label:"NO₂",
      value:components.no2,
      max:200,
      icon:<Flame size={22}/>
    },


    {
      label:"SO₂",
      value:components.so2,
      max:100,
      icon:<Droplets size={22}/>
    },

  ];





return (

<div
className="
mt-6
rounded-3xl
bg-linear-to-br
from-sky-500/70
via-blue-500/70
to-indigo-700/70
dark:from-gray-800
dark:via-gray-700
dark:to-gray-900
p-6
text-white
shadow-xl
backdrop-blur-xl
"
>



{/* AQI CARD */}

<div
className="
rounded-2xl
bg-white/15
p-5
border
border-white/20
"
>


<div className="flex justify-between items-center">


<div>

<p className="text-sm text-blue-100">
Air Quality Index
</p>


<p className="text-4xl font-black mt-2">
{
aqi ?? "--"
}
</p>


</div>




<div
className={`
rounded-full
px-4
py-2
font-bold
${getAQIColor(aqi)}
`}
>

{
aqi
?
getAQIStatus(aqi)
:
"No Data"
}

</div>



</div>




<div className="mt-5">


<Progress

percent={
getAQIPercent(aqi)
}

color={
getAQIColor(aqi)
}

/>


</div>



</div>





{/* POLLUTANTS */}


<div className="mt-5 grid gap-4">


{
pollutants.map((item)=>(


<div

key={item.label}

className="
rounded-2xl
bg-white/10
p-4
border
border-white/10
transition
hover:bg-white/20
"

>


<div
className="
flex
justify-between
items-center
mb-3
"
>



<div
className="
flex
items-center
gap-3
"
>


<div
className="
rounded-xl
bg-white/20
p-2
"
>

{item.icon}

</div>



<span className="font-bold">
{item.label}
</span>



</div>



<span className="font-bold">

{
Number(item.value).toFixed(1)
}

</span>



</div>





<Progress

percent={
getPollutantPercent(
item.value,
item.max
)
}

color={
getPollutantColor(item.value)
}

/>



</div>



))

}



</div>



</div>


)

}