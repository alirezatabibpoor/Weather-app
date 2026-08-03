import Progress from "../../progress";
import {
  getPollutantColor,
  getPollutantPercent,
} from "@/app/utils/function";
import {
  Wind,
  Cloud,
  Factory,
  Flame,
  Droplets,
  Activity
} from "lucide-react";


export default function AirQualityCard({ air }) {

  if(!air) return null;


  const quality = {
    1: "🟢 Excellent",
    2: "🟡 Fair",
    3: "🟠 Moderate",
    4: "🔴 Poor",
    5: "🟣 Very Poor",
  };


  const pollutants = [
    {
      label: "PM2.5",
      value: air.list[0].components.pm2_5,
      max: 100,
      icon:<Wind size={22}/>
    },
    {
      label: "PM10",
      value: air.list[0].components.pm10,
      max: 150,
      icon:<Cloud size={22}/>
    },
    {
      label: "CO",
      value: air.list[0].components.co,
      max: 10000,
      icon:<Factory size={22}/>
    },
    {
      label: "O₃",
      value: air.list[0].components.o3,
      max: 300,
      icon:<Activity size={22}/>
    },
    {
      label: "NO₂",
      value: air.list[0].components.no2,
      max: 200,
      icon:<Flame size={22}/>
    },
    {
      label: "SO₂",
      value: air.list[0].components.so2,
      max: 100,
      icon:<Droplets size={22}/>
    },
  ];


  const aqi = air.list[0].main.aqi;


  return (

    <div className="
    mt-6 rounded-3xl 
    bg-linear-to-br 
    from-sky-650/70 
    via-blue-500/70 
    to-indigo-700/70
    dark:from-gray-800 
    dark:via-gray-700 
    dark:to-gray-900
    p-6
    text-white
    shadow-xl
    backdrop-blur-xl
    transition
    hover:-translate-y-1
    hover:shadow-2xl
    ">


      {/* AQI */}

      <div className="
      mb-6 
      rounded-2xl 
      bg-white/15 
      p-5 
      backdrop-blur-md
      border
      border-white/20
      ">

        <div className="flex items-center justify-between">

          <div>
            <p className="text-sm text-blue-100">
              Air Quality Index
            </p>

            <p className="mt-1 text-3xl font-extrabold">
              {aqi}
            </p>
          </div>


          <div className="
          rounded-full
          bg-white/20
          px-4
          py-2
          font-bold
          backdrop-blur-md
          ">
            {quality[aqi]}
          </div>

        </div>


        <div className="mt-4">

          <Progress
            percent={(aqi / 5) * 100}
            color={getPollutantColor(aqi * 20)}
          />

        </div>


      </div>



      {/* Pollutants */}

      <div className="grid gap-4">


        {pollutants.map((item)=>(

          <div
          key={item.label}
          className="
          rounded-2xl
          bg-white/10
          p-4
          backdrop-blur-md
          border
          border-white/10
          transition
          hover:bg-white/20
          hover:scale-[1.02]
          "
          >


            <div className="
            mb-3
            flex
            items-center
            justify-between
            ">


              <div className="
              flex
              items-center
              gap-3
              ">

                <div className="
                rounded-xl
                bg-white/20
                p-2
                ">
                  {item.icon}
                </div>


                <span className="font-bold">
                  {item.label}
                </span>

              </div>


              <span className="
              rounded-lg
              bg-black/10
              px-3
              py-1
              font-bold
              ">
                {item.value.toFixed(1)}
              </span>


            </div>



            <Progress
              percent={getPollutantPercent(
                item.value,
                item.max
              )}
              color={getPollutantColor(item.value)}
            />


          </div>


        ))}


      </div>


    </div>

  );
}