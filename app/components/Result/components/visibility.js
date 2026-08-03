import {Eye} from 'lucide-react'
export default function Visibility({visibility})
{
    return(
        <>
           <div className="rounded-2xl bg-white/10 p-4 text-center">

  <p className="font-bold">
    Visibility
     <div className="my-3 flex justify-center">
    <Eye
      size={42}
      className="animate-blink text-cyan-300"
    />
   </div>
  </p>

 

  <p className="text-xl font-bold">
    {visibility / 1000} km
  </p>

</div>
        </>
    )
}