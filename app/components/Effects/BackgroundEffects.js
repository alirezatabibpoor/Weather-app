"use client";

import Rain from "./Rain";
import Snow from "./Snow";
import Clouds from "./Clouds";
import Sun from "./Sun";

export default function BackgroundEffects({ weather }) {

  switch (weather) {

    case "Rain":
    case "Drizzle":
      return <Rain />;

    case "Snow":
      return <Snow />;

    case "Clouds":
      return <Clouds />;

    case "Clear":
      return <Sun />;

    default:
      return null;

  }

}