"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() =>
        setTheme(theme === "dark" ? "light" : "dark")
      }
      className="
      group
      flex
      h-12
      w-12
      items-center
      justify-center
      rounded-full
      bg-white/15
      backdrop-blur-xl
      transition-all
      duration-500
      hover:scale-110
      hover:bg-white/25
      "
    >
      {theme === "dark" ? (
        <Sun
          size={24}
          className="text-yellow-400 transition-all duration-500 group-hover:rotate-180"
        />
      ) : (
        <Moon
          size={22}
          className="text-black transition-all duration-500 group-hover:-rotate-12"
        />
      )}
    </button>
  );
}