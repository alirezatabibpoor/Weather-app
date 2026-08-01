"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="dark:from-gray-500 dark:via-gray-700 dark:to-gray-800 flex min-h-screen items-center justify-center bg-linear-to-br from-sky-400 via-blue-500 to-indigo-700 px-5">
      
      <div className="w-full max-w-lg rounded-3xl border border-white/30 bg-white/20 p-10 text-center shadow-2xl backdrop-blur-xl">

        {/* Icon */}
        <div className="mx-auto mb-6 flex h-28 w-28 items-center justify-center rounded-full bg-white/20 text-6xl shadow-lg">
          🌧️
        </div>

        {/* Error Code */}
        <h1 className="text-7xl font-black text-white">
          404
        </h1>

        <h2 className="mt-4 text-2xl font-bold text-white">
          Page Not Found
        </h2>

        <p className="mt-3 text-white/80">
          Oops! The page you're looking for doesn't exist.
        </p>

        {/* Button */}
        <Link
          href="/"
          className="mt-8 inline-block rounded-xl bg-white px-8 py-3 font-bold text-blue-600 shadow-lg transition hover:scale-105 hover:bg-blue-50 active:scale-95"
        >
          🏠 Back to Home
        </Link>

      </div>

    </div>
  );
}