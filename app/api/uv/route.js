import { NextResponse } from "next/server";

export async function GET(request)
{
    const {searchParams}=new URL(request.url)
    const lat = searchParams.get('lat');
    const lon = searchParams.get('lon');


    const res = await fetch(
    `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,daily,alerts&appid=${process.env.OPENWEATHER_API_KEY}&units=metric`
  );

  const data = await res.json();

  return NextResponse.json(data)
}