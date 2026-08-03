"use client";

import { useState } from "react";
import ForecastCard from "./ForecastCard";
import WeatherMap from "../../weathermap/WeatherMap";
import Accordion from "../../Accordion";
import { MapIcon } from "lucide-react";
import AirQualityCard from "./AirQualityCard";
import Modal from "../../Modal/Modal";
import DailyWeather from "./DailyWeather";
export default function Footer({
  weather,
  air,
  forecast,
  loading,
  language,
  uv
}) {

  const [selectedDay, setSelectedDay] = useState(null);
   

  return (
    <div
      className="
      hover:-translate-y-2
      hover:shadow-blue-500/40
      dark:hover:shadow-gray-500/40
      transition duration-300
      mx-auto mt-8
      flex w-full max-w-7xl
      flex-col gap-8
      "
    >


      {/* Location */}

      {!loading && weather && (

        <div className="
        dark:from-gray-700 dark:via-gray-800 dark:to-gray-900
        rounded-3xl
        bg-linear-to-br
        from-blue-500
        via-blue-600
        to-indigo-400
        border border-white/20
        overflow-hidden
        shadow-xl
        ">

          <Accordion
            title="📍 Location"
            icon={
              <MapIcon className="h-5 w-5 text-red-400"/>
            }
          >

            <WeatherMap
              lat={weather.coord.lat}
              lon={weather.coord.lon}
              city={weather.name}
              temp={weather.main.temp}
            />

          </Accordion>

        </div>

      )}



      {/* Air Quality */}

      {!loading && air && (

        <div
        className="
        dark:from-gray-700 dark:via-gray-800 dark:to-gray-900
        rounded-3xl
        bg-linear-to-br
        from-blue-500
        via-blue-600
        to-indigo-400
        border border-white/20
        shadow-xl
        overflow-hidden
        "
        >

          <Accordion
          title="🌫️ Air Quality"
          icon="🌫️"
          >

            <AirQualityCard air={air}/>

          </Accordion>

        </div>

      )}






      {/* Forecast */}


      {!loading && forecast && (

        <div
        className="
        dark:from-gray-700 dark:via-gray-800 dark:to-gray-900
        rounded-3xl
        bg-linear-to-br
        from-blue-500
        via-blue-600
        to-indigo-400
        border border-white/20
        shadow-xl
        overflow-hidden
        "
        >


        <Accordion
        title="5 Day Forecast"
        icon="☀️"
        >


        <div className="p-6">


        <div
        className="
        grid
        grid-cols-1
        gap-6
        sm:grid-cols-2
        lg:grid-cols-5
        "
        >


        {
        forecast.list
        .filter(item =>
          item.dt_txt.includes("12:00:00")
        )
        .map((item , index)=>(


          <ForecastCard

          key={item.dt}


          day={
            new Date(item.dt_txt)
            .toLocaleDateString(
              language==="fa"
              ? "fa-IR"
              : "en-US",
              {
                weekday:"long"
              }
            )
          }


          temperature={
            item.main.temp
          }


          humidity={
            item.main.humidity
          }


          condition={
            item.weather[0].description
          }


          icon={
            item.weather[0].icon
          }

          active={selectedDay===index}

 
          onClick={()=>
          setSelectedDay({ data:item, date:item.dt_txt.split(" ")[0]
 })
}


          />


        ))
        }


        </div>


        </div>


        </Accordion>
        </div>

      )}






      {/* Modal */}

      {
      selectedDay && (

        <Modal
        close={()=>setSelectedDay(null)}
        >

          <DailyWeather
 data={selectedDay.data}
 air={air}
/>

        </Modal>

      )
      }
{
  console.log("uv:",uv)
}


    </div>
  )
}