"use client";
import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import ForecastCard from "../ForecastCard";
import { get_city, getSuggestions } from "@/app/redux/weatherslice";
import Loading from "../loading";
import Result from "../Result/result";
import AirQualityCard from "../AirQualityCard";
import {isPersian} from '../../utils/function'
import useWeathear from "../../hooks/useWeather";
import OfflineBanner from "../OfflineBanner";
import WeatherMap from "../weathermap/WeatherMap";
import Accordion from "../Accordion";
import {MapIcon} from "lucide-react"
export default function Search() {
  const {dispatch , weather , forecast , loading ,air, uv , suggestions} = useWeathear();
  const [language, setLanguage] = useState("en");
  const [showSuggestions, setShowSuggestions] = useState(true);
  const formik = useFormik({
    initialValues: {
      city: "",
    },

    validationSchema: yup.object({
      city: yup.string().required("Please enter a city!"),
    }),

    onSubmit: async (values) => {
      const lang = isPersian(values.city) ? "fa" : "en";

      setLanguage(lang);

      const result = await dispatch(
        get_city({
          city: values.city.trim(),
          lang,
        })
      );

      if (get_city.rejected.match(result)) {
        toast.error("City not found!");
        return;
      }

      toast.success("Weather loaded successfully!");
    },
  });

  return (
    <>
    <OfflineBanner/>
     <div className="
min-h-screen
bg-linear-to-br
from-sky-400 via-blue-500 to-indigo-700
dark:from-gray-500 dark:via-gray-600 dark:to-gray-800
px-5 py-12
">
      {/* Search */}
      <form
        onSubmit={formik.handleSubmit}
        className="mx-auto flex max-w-xl flex-col gap-4"
      >
        <input
          name="city"
          value={formik.values.city}
          onChange={(e)=>{formik.handleChange(e);setShowSuggestions(true);dispatch(getSuggestions(e.target.value))}}
          onBlur={()=>{formik.handleBlur , setShowSuggestions(false)}}
          placeholder="Enter city..."
          className="dark:bg-gray-700 dark:text-white rounded-xl border border-white/30 bg-white/20 px-5 py-4 text-white outline-none placeholder:text-white/70 backdrop-blur-md"
        />
        {
showSuggestions &&suggestions.length>0 && (

<div className="mt-2 rounded-xl bg-white shadow-xl overflow-hidden">

{
suggestions.map((item)=>(
<div
key={`${item.lat}-${item.lon}`}
className="cursor-pointer px-4 py-3 hover:bg-sky-100 dark:bg-black"
onClick={()=>{
formik.setFieldValue("city",item.name)
setShowSuggestions(false)
formik.handleSubmit();
}}
>
{item.name},
{item.country}
</div>
))
}
</div>
)
}

        {formik.touched.city && formik.errors.city && (
          <p className="text-red-200">{formik.errors.city}</p>
        )}

        <button
          type="submit"
          className="dark:text-black rounded-xl bg-white py-4 font-bold text-blue-600 transition hover:scale-105"
        >
          Search
        </button>
      </form>

      {/* Loading */}
      {loading && (
        <div className="mt-10 flex justify-center">
          <Loading />
        </div>
      )}

      {/* Current Weather */}
      {!loading && weather && (
        <div className="mt-12 flex justify-center">
          <Result
            name={weather.name}
            country={weather.sys.country}
            temperature={weather.main.temp}
            humidity={weather.main.humidity}
            condition={weather.weather[0].description}
            icon={weather.weather[0].icon}
            sunrise={weather.sys.sunrise}
            sunset={weather.sys.sunset}
            windSpeed = {weather.wind.speed}
            windDirection = {weather.wind.deg}
            pressure={weather.main.pressure}
            feelsLike={weather.main.feels_like}
            visibility={weather.visibility}
            clouds={weather.clouds.all}
            minTemp={weather.main.temp_min}
            maxTemp={weather.main.temp_max}
            uv={uv}
            timezone={weather.timezone}
          />
        </div>
      )}

      {
  !loading && weather && (
    <Accordion title={"Location"} icon={<MapIcon className="w-5 h-5 text-red-500" />}>
      <WeatherMap
      lat={weather.coord.lat}
      lon={weather.coord.lon}
      city={weather.name}
      temp={weather.main.temp}
    />
    </Accordion>
  )
}

      {
        !loading&&air&&(
          <Accordion title={"Air Quality"} icon={"🌫️"}>
            <AirQualityCard air={air}/>
          </Accordion>
        )
      }
     
     <Accordion title={"5 Day Forecast"} icon={"☀️"}>
      <div className="mt-14">
  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
    {!loading &&
      forecast?.list
        .filter((item) => item.dt_txt.includes("12:00:00"))
        .map((item) => (
          <>
           <ForecastCard
            key={item.dt}
            day={new Date(item.dt_txt).toLocaleDateString(
              language === "fa" ? "fa-IR" : "en-US",
              {
                weekday: "long",
              }
            )}
            temperature={item.main.temp}
            humidity={item.main.humidity}
            condition={item.weather[0].description}
            icon={item.weather[0].icon}
          />
          </>
         
        ))}
  </div>
</div>
     </Accordion>
 
    </div>
    </>
   
  );
}