import { NextResponse } from "next/server";

export async function GET(request)
{
    const {searchParams} = new URL(request.url)

    const lat = searchParams.get("lat");
    const lon = searchParams.get("lon");

    if(!lat && !lon){
        return NextResponse.json({
            message:"latitue and longitute are required!"
        },{status:400})
    }

const response = await fetch(
    `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${process.env.OPENWEATHER_API_KEY}`
  );


const data = await response.json();

return NextResponse.json(data)



}