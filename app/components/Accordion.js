"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Accordion({
  title,
  icon,
  children,
  defaultOpen = false,
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className=" mx-2 mt-6 mb-2">

      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between rounded-2xl bg-white/10 px-5 py-4 backdrop-blur-xl transition-all duration-300 hover:bg-white/20"
      >
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-white/20 p-2">
            {icon}
          </div>

          <span className="text-lg font-semibold text-white">
            {title}
          </span>
        </div>

        <ChevronDown
          size={24}
          className={`transition-transform duration-500 text-white ${
            open ? "rotate-180 text-white" : ""
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-500 ${
          open
            ? "mt-4 max-h-600 opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        {children}
      </div>

    </div>
  );
}