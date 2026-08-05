import {Sun} from 'lucide-react';
import Progress from '../../progress';
export default function Uvindex({extra , getUVStatus , getUVColor})
{
    return(
        <>
         <div className="rounded-2xl bg-white/10 p-5 text-center backdrop-blur-xl">

  <p className="mb-3 text-sm font-semibold text-blue-100 ">
    ☀️ UV Index
  </p>


  <div className="mb-4 flex justify-center">
    <Sun
      size={46}
      className={`text-yellow-400 transition-all duration-500 hover:rotate-180 ${getUVColor(
        extra?.current?.uv_index
      )
        .replace("bg-", "text-")}`}
    />
  </div>

  <p className="text-2xl font-bold">
    {extra?.current?.uv_index?.toFixed(1)}
  </p>

  <p className="mb-2 text-sm text-blue-100">
    {getUVStatus(extra?.current?.uv_index)}
  </p>

  <Progress
     percent={Math.min((extra?.current?.uv_index / 11) * 100, 100)}
    color={getUVColor(extra?.current?.uv_index)}
  />

</div>
        </>
    )
}