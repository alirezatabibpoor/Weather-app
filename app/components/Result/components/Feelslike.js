import {Thermometer} from "lucide-react"
export default function Feellike({feelsLike})
{
    return(
        <>
           <div className="rounded-2xl bg-white/10 p-4 text-center">
          <Thermometer
             size={42}
             className={`mx-auto mb-3 transition ease-in duration-700 hover:text-gray-100 ${
                  feelsLike < 24 ? "text-blue-200"  : "text-red-500"}`}
                  />
          <p className=""><p className=""></p> Feels Like</p>
          <p className="text-xl font-bold">
            {Math.round(feelsLike)}°C
          </p>
        </div>
        </>
    )
}