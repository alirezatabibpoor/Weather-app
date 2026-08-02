import { NextResponse } from "next/server";

export async function GET(request)
{
    const {searchParams}=new URL(request.url)
    const lat = searchParams.get('lat');
    const lon = searchParams.get('lon');


   const res = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=uv_index`
  );

  const data = await res.json();
  

  return NextResponse.json(data)
}