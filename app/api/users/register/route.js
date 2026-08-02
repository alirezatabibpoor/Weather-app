import { NextResponse } from "next/server";
import { supabase } from "@/app/lib/supabase";
import bcrypt from "bcrypt";


export async function POST(request) {

  const {name,email,password} = await request.json();


  const hashedPassword = await bcrypt.hash(password,10);


  const {data,error} = await supabase
    .from("users")
    .insert({
      name,
      email,
      password: hashedPassword
    })
    .select()
    .single();


  if(error){
    return NextResponse.json(
      {message:error.message},
      {status:400}
    );
  }


  return NextResponse.json(data);
}