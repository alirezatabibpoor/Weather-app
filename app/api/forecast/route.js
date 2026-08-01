import { NextResponse } from "next/server";

export async function GET(request) {
    const {searchParams}=new URL(request.url);
    const city = searchParams.get("city");
    const lang = searchParams.get("lang");


    if(!city){
        return NextResponse.json(
           {message:'city is required'},
           {status:400}
            
        );
    }

    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.OPENWEATHER_API_KEY}&units=metric&lang=${lang}`);

    const data = await response.json();
    if(!response.ok){
        return NextResponse.json(data,{status:response.status})
    }
    return NextResponse.json(data)
    
}