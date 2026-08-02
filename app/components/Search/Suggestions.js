import { MapPin, ChevronRight } from "lucide-react";

export default function Suggestions({
  showSuggestions,
  suggestions,
  formik,
  setShowSuggestions,
}) {
  if (!showSuggestions || suggestions.length === 0) return null;

  return (
    <div className="mt-3 overflow-hidden rounded-3xl border border-white/20 bg-white/15 shadow-2xl backdrop-blur-xl dark:border-gray-700 dark:bg-gray-800/80">
      <ul className="max-h-80 overflow-y-auto">
        {suggestions.map((item) => (
          <li
            key={`${item.lat}-${item.lon}`}
            onMouseDown={() => {
              formik.setFieldValue("city", item.name);
              setShowSuggestions(false);
              formik.submitForm();
            }}
            className="group flex cursor-pointer items-center justify-between border-b border-white/10 px-5 py-4 transition-all duration-300 hover:bg-white/20 dark:hover:bg-gray-700 last:border-b-0"
          >
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-sky-500/20 p-3 transition group-hover:scale-110 group-hover:bg-sky-500/40">
                <MapPin className="h-5 w-5 text-sky-300" />
              </div>

              <div>
                <h3 className="font-semibold text-white">
                  {item.name}
                </h3>

                <p className="text-sm text-blue-100 dark:text-gray-300">
                  {item.country}
                </p>
              </div>
            </div>

            <ChevronRight className="h-5 w-5 text-white/50 transition group-hover:translate-x-1 group-hover:text-white" />
          </li>
        ))}
      </ul>
    </div>
  );
}