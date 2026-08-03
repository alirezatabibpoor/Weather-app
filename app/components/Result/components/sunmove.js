export default function Sunmove({sunriseTime , sunsetTime , progress})
{
    return(
        <>
           {/* Sunrise & Sunset */}
   
<div className="mt-2 rounded-2xl bg-white/10 p-5 backdrop-blur-xl">
  <div className="flex justify-between text-sm mb-6">
    <span className="font-bold">🌅 {sunriseTime}</span>
    <span className="font-bold">🌇 {sunsetTime}</span>
  </div>

  <div className="relative h-2 rounded-full bg-white/20">
    <div className="hover:bg-amber-100 transition ease-linear duration-300 absolute inset-y-0 left-0 rounded-full bg-yellow-400"
      style={{ width: `${progress}%` }}
    />
    <div
      className="absolute -top-4 transition-all duration-1000"
      style={{
        left: `calc(${progress}% - 14px)`
      }}
    >
      ☀️
    </div>
  </div>
</div>
        </>
    )
}