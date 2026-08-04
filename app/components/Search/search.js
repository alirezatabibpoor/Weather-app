"use client";
import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import { get_city, getSuggestions } from "@/app/redux/weatherslice";
import Loading from "../loading";
import {isPersian} from '../../utils/function'
import useWeathear from "../../hooks/useWeather";
import OfflineBanner from "../OfflineBanner";
import Form from "./components/Form";
import Footer from "./components/footer";
import CurrentWeather from "./components/CurrentWeather";

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
     <div className="min-h-screen bg-linear-to-br from-sky-400 via-blue-500 to-indigo-700 dark:from-gray-500 dark:via-gray-600 dark:to-gray-800 px-5 py-12
">
      {/* Search */}
     <Form formik={formik} suggestions={suggestions} showSuggestions={showSuggestions} getSuggestions={getSuggestions} setShowSuggestions={setShowSuggestions} dispatch={dispatch}/>
      {/* Loading */}
      {loading && (
        <div className="mt-10 flex justify-center">
          <Loading />
        </div>
      )}

      {/* Current Weather */}
      <CurrentWeather  loading={loading} weather={weather} uv={uv} forecast={forecast}/>

     <Footer air={air} forecast={forecast} weather={weather} loading={loading} language={language} uv={uv}/>
 
    </div>
    </>
   
  );
}