export default function Tempreature({temperature , maxTemp , minTemp , condition})
{
    return(
          <div className="mx-2 my-8 text-center">

       
      

        <p className="text-center text-7xl font-extrabold hover:scale-120s">
             {Math.round(temperature)}°
        </p>


    <div className="mt-4 grid grid-cols-2 gap-4">

  <div className="rounded-3xl bg-white/15 p-6 text-center backdrop-blur-xl transition hover:scale-105">
    <p className="text-lg">🔺 Max</p>
    <h2 className="mt-3 text-3xl font-bold">
      {Math.round(maxTemp)}°
    </h2>
  </div>

  <div className=" rounded-3xl bg-white/15 p-6 text-center backdrop-blur-xl transition hover:scale-105">
    <p className="text-lg">🔻Min</p>
    <h2 className="mt-3 text-3xl font-bold">
      {Math.round(minTemp)}°
    </h2>
  </div>

</div>

        <p className="mt-2 text-lg font-medium text-blue-100 animate-pulse">
          {condition}
        </p>
      </div>


      
    )
}