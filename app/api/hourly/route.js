import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);

  const lat = searchParams.get("lat");
  const lon = searchParams.get("lon");

  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code&forecast_days=1&timezone=auto`
  );

   const data = await response.json();
    if(!response.ok){
        return NextResponse.json(data,{status:response.status})
    }
    return NextResponse.json(data)
    
}