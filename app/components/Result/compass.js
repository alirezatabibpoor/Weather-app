import { Navigation } from "lucide-react";
import { getWindDirection } from "@/app/utils/function";

export default function Compass({ windDirection }) {
  return (
    <div className="hover:animate-pulse rounded-2xl bg-white/10 p-4 text-center backdrop-blur-sm">
      <p className="mb-3 text-sm font-medium text-blue-100">
        🧭 Wind Direction
      </p>

      <div className="hover:rotate-360 duration-1000 hover:border-blue-900 relative mx-auto h-20 w-20 rounded-full border border-white/30">

        <span className="absolute left-1/2 top-1 -translate-x-1/2 text-[10px]">
          N
        </span>

        <span className="absolute bottom-1 left-1/2 -translate-x-1/2 text-[10px]">
          S
        </span>

        <span className="absolute left-1 top-1/2 -translate-y-1/2 text-[10px]">
          W
        </span>

        <span className="absolute right-1 top-1/2 -translate-y-1/2 text-[10px]">
          E
        </span>

        <Navigation
          size={28}
          className="hover:scale-110 absolute left-1/2 top-1/2 text-cyan-300 transition-all duration-700"
          style={{
            transform: `translate(-50%, -50%) rotate(${windDirection}deg)`,
          }}
        />
      </div>

      <p className=" mt-3 text-xl font-bold">
        {getWindDirection(windDirection)}
      </p>

      <p className="text-xs text-blue-100">
        {windDirection}°
      </p>
    </div>
  );
}