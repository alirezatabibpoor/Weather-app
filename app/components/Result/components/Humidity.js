import Progress from "../../progress";
import {DropletIcon} from 'lucide-react'
export default function Humidity({humidity,condition})
{
    return(
        <>
         {/* Humidity & Condition */}
      <div className="flex items-center justify-evenly rounded-2xl bg-white/15 p-4 backdrop-blur-sm">
        <div className="hover:animate-pulse hover:scale-120 duration-500 text-center">
          <p className=" text-md font-bold text-blue-100">Humidity</p>
          <p className="mt-1 text-xl font-bold">{humidity}%</p>
          <DropletIcon className="text-blue-50 mb-1 animate-drop m-auto" size={24}/>
          <Progress percent={humidity}/>
        </div>


        <div className="h-10 w-px bg-white/30"></div>

        <div className="text-center">
          <p className="text-lg font-bold text-blue-100">Condition</p>
          <p className="mt-1 text-xl font-bold">{condition}</p>
        </div>
      </div>
        </>
    )
}