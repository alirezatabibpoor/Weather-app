import { weatherCodeToEmoji } from "@/app/utils/function";

export default function ForecastRow({
  day,
  icon,
  condition,
  minTemp,
  maxTemp,
  onClick,
}) {
  return (
    <div
      onClick={onClick}
      className="
      flex items-center justify-between
      rounded-xl
      border-b border-white/10
      px-4 py-4
      cursor-pointer
      hover:bg-white/10
      transition
      "
    >
      <div className="w-24 font-bold text-white dark:text-white">
        {day}
      </div>

      <p className="">{weatherCodeToEmoji(icon)}</p>

      <div className="flex-1 px-4 capitalize text-sm text-white/80 font-bold">
        {condition}
      </div>

      <div className="font-bold">
        <span className="text-blue-300">
          {Math.round(minTemp)}°
        </span>

        <span className="mx-2 text-white/40">
          /
        </span>

        <span className="text-red-300">
          {Math.round(maxTemp)}°
        </span>
      </div>
    </div>
  );
}