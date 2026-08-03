import { NextResponse } from "next/server";


export async function GET(request) {

    const { searchParams } = new URL(request.url);

    const lat = searchParams.get("lat");
    const lon = searchParams.get("lon");


    if(!lat || !lon){

        return NextResponse.json(
            {
                message:"latitude and longitude are required"
            },
            {
                status:400
            }
        );

    }


    try {

        const response = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code&forecast_days=1`
        );


        const data = await response.json();


        if(!response.ok){

            return NextResponse.json(
                data,
                {
                    status:response.status
                }
            );

        }


        return NextResponse.json(data);


    } catch(error){

        return NextResponse.json(
            {
                message:"Hourly weather failed"
            },
            {
                status:500
            }
        );

    }

}