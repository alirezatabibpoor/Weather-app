import {Gauge} from 'lucide-react'
export default function Pressure({pressure})
{
    return(
        <>
        <div className="rounded-2xl bg-white/10 p-4 text-center">
        <Gauge
          size={42}
           className="mx-auto my-3 text-emerald-300 transition-all duration-1200 hover:rotate-360"
           style={{
               transform: `rotate(${(pressure - 980) * 0.6}deg)`,
               }}
/>
          <p className="">📈 Pressure</p>
          <p className="text-xl font-bold">{pressure} hPa</p>
        </div>
        </>
    )
}