import { NextResponse } from "next/server";

export async function GET(req) {
  const { searchParams } = new URL(req.url);

  const city = searchParams.get("city");

  if (!city)
    return NextResponse.json([]);

  const res = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${process.env.OPENWEATHER_API_KEY}`
  );

  const data = await res.json();

  return NextResponse.json(data);
}