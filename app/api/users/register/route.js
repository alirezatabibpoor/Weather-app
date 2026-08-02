import { NextResponse } from "next/server";
import { supabase } from "@/app/lib/supabase";


export async function POST(request) {

  const { name, email, password } = await request.json();


  const { data, error } = await supabase
    .from("users")
    .insert({
      name,
      email,
      password
    })
    .select()
    .single();


  if(error){
    return NextResponse.json(
      { message: error.message },
      { status: 400 }
    );
  }


  return NextResponse.json(data);
}