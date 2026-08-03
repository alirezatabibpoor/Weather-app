import {Wind} from 'lucide-react'
export default function WindSpeed({windSpeed})
{
    return(
        <>
          <div className="rounded-2xl bg-white/10 p-4 text-center">
                   <p className="font-bold">🌬️ Wind Speed</p>
        
              <div className="my-4 flex justify-center">
              <Wind
              size={42}
              className="animate-sway mx-auto animate-sway text-cyan-300"
              />
            </div>
        
          <p className="text-xl font-bold">
            {windSpeed} m/s
          </p>
        </div>
        </>
    )
}