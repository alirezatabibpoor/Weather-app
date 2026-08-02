"use client";

import { signOut, useSession } from "next-auth/react";
import { useTheme } from "next-themes";
import { X  } from "lucide-react";
import ThemeToggle from "../Effects/ThemeToggle";


export default function Sidebar({ open, setOpen }) {
  const { data: session, status } = useSession();
  const isLoggedIn = status === "authenticated";

  return (
    <div
      className={`dark:bg-gray-400 fixed right-0 top-0 z-50 h-full w-80 transform bg-white p-6 shadow-2xl transition-transform duration-300 ${
        open ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-200 pb-5">
        <div className="flex items-center gap-3">
          <div className="dark:bg-gray-600 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-2xl">
            🌤️
          </div>

          <h2 className="dark:text-white text-xl font-bold text-blue-600">
            Weather
          </h2>
        </div>
       <ThemeToggle/>

    <button onClick={() => setOpen(false)}className="rounded-full p-2 hover:bg-gray-200"><X className="text-black" size={22} /></button>

      
      </div>

      {/* User Information */}
      {isLoggedIn && (
        <div className="dark:bg-gray-300 mt-6 rounded-2xl bg-blue-50 p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-xl text-white">
              👤
            </div>

            <div>
              <p className="font-bold text-gray-800">
                {session.user?.name}
              </p>

              <p className="font-semibold text-sm text-gray-500">
                {session.user?.email}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Menu */}
      <div className=" mt-8 flex flex-col gap-3">

        <a
          href="/"
          className="dark:text-white rounded-xl px-4 py-3 text-gray-700 transition hover:bg-blue-100 hover:text-blue-600"
        >
          🏠 Home
        </a>

        <a
          href="/forecast"
          className="dark:text-white rounded-xl px-4 py-3 text-gray-700 transition hover:bg-blue-100 hover:text-blue-600"
        >
          🌦️ Forecast
        </a>

        <a
          href="/about"
          className="dark:text-white rounded-xl px-4 py-3 text-gray-700 transition hover:bg-blue-100 hover:text-blue-600"
        >
          ℹ️ About
        </a>


         <a
          href="/register"
          className="text-start dark:text-white rounded-xl px-4 py-3 text-gray-700 transition hover:bg-blue-100 hover:text-blue-600"
        >
          🔑 Register
        </a>

        {/* Login / Logout */}
        {isLoggedIn ? (
          <button
            onClick={() => signOut()}
            className=" mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-red-500 px-5 py-3 font-semibold text-white shadow-md transition hover:bg-red-600 hover:shadow-lg active:scale-95"
          >
            🚪 Sign Out
          </button>
        ) : (
          <a
            href="/login"
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-green-500 px-5 py-3 font-semibold text-white shadow-md transition hover:bg-green-600 hover:shadow-lg active:scale-95"
          >
            🔐 Login
          </a>
        )}
      </div>

      {/* Footer */}
      <div className="mt-3 absolute bottom-6 left-6 right-6 rounded-xl bg-blue-50 p-4 text-center">
        <p className="text-sm text-blue-600">
          Check the weather anywhere 🌍
        </p>
      </div>
    </div>
  );
}