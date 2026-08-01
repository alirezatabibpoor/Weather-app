export default function Progress({percent , color = "bg-green-400"})
{
    return(
<div className="w-full h-3 rounded-full bg-white/20 overflow-hidden">
  <div
    className={`h-full rounded-full bg-green-400 transition-all duration-700 ${color}`}
    style={{ width: `${percent}%` }}
  />
</div>
    )
}