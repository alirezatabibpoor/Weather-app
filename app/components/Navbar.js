"use client";

import { useState } from "react";
import Sidebar from "./sidebar/sidebar";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="dark:bg-linear-to-r from-white to-gray-300 border-b border-white/20 bg-white/10 px-6 py-4 shadow-lg backdrop-blur-md">
        <div className= "mx-auto flex max-w-7xl items-center justify-between">

          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-3 text-2xl font-bold text-blue-600"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/20 text-2xl shadow-md">
              🌤️
            </div>

            <span className="dark:text-black">Weather</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 text-gray-700 md:flex">
            <a href="/" className="transition hover:text-blue-400">
              Home
            </a>

            <a href="/forecast" className="transition hover:text-blue-400">
              Forecast
            </a>

            <a href="/about" className="transition hover:text-blue-400">
              About
            </a>
          </div>
           
          
          {/* Button */}
          <button
            onClick={() => setOpen(true)}
            className="dark:text-black rounded-xl bg-white px-5 py-2 font-semibold text-blue-600 shadow-md transition hover:scale-105 hover:bg-blue-50"
          >
            Get Started
          </button>
        </div>
      </nav>

      {/* Sidebar */}
      <Sidebar
        open={open}
        setOpen={setOpen}
      />
    </>
  );
}