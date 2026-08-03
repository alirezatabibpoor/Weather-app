import {Cloud} from 'lucide-react'
export default function CloudArea({clouds ,getCloudStatus})
{
    return(
        <>
         <div className="rounded-2xl bg-white/10 p-4 text-center">
          <p> Cloud Cover</p>
            <Cloud
            size={42}
            className="mx-auto my-4 text-slate-200 animate-cloud"
  />
          <p className="text-xl font-bold">
            {clouds}% - {getCloudStatus(clouds)}
          </p>
        </div>
        </>
    )
}