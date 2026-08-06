import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);

  const lat = searchParams.get("lat");
  const lon = searchParams.get("lon");

  const weatherResponse = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,apparent_temperature,relative_humidity_2m,pressure_msl,wind_speed_10m,wind_direction_10m,cloud_cover,uv_index,visibility,weather_code,is_day&hourly=temperature_2m,apparent_temperature,relative_humidity_2m,pressure_msl,wind_speed_10m,wind_direction_10m,cloud_cover,weather_code,is_day&daily=temperature_2m_max,temperature_2m_min,weather_code,wind_speed_10m_max,wind_direction_10m_dominant&forecast_days=6&timezone=auto`
  );

  const airResponse = await fetch(
    `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${lat}&longitude=${lon}&hourly=us_aqi&timezone=auto`
  );

  const weatherData = await weatherResponse.json();
  const airData = await airResponse.json();

  if (!weatherResponse.ok) {
    return NextResponse.json(weatherData, {
      status: weatherResponse.status,
    });
  }

  return NextResponse.json({
    ...weatherData,
    hourly: {
      ...weatherData.hourly,
      us_aqi: airData.hourly.us_aqi,
    },
  });
}