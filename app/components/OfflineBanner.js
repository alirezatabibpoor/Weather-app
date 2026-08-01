"use client"

import { useEffect, useState } from "react"
import { WifiOff } from "lucide-react";
export default function OfflineBanner()
{
    const[isOnline , setisOnline]=useState(true)
    useEffect(()=>
    {
        setisOnline(navigator.onLine);
        const online = ()=>setisOnline(true);
        const offline = ()=>setisOnline(false)
        window.addEventListener("online", online);
        window.addEventListener("offline", offline); 
        return ()=>{
            window.removeEventListener("online",online)
            window.removeEventListener("offline",offline)
        }
    },[])
     if (isOnline) return null;

    return (
    <div className="fixed left-1/2 top-5 z-50 flex -translate-x-1/2 items-center gap-3 rounded-2xl bg-red-500 px-5 py-3 text-white shadow-xl">
      <WifiOff size={22} />
      <span>No Internet Connection</span>
    </div>
  );
}