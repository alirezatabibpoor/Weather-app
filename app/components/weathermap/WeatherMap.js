"use client";

import dynamic from "next/dynamic";

const Map = dynamic(() => import("./WeatherMapClient"), {
  ssr: false,
});

export default function WeatherMap(props) {
  return <Map {...props} />;
}