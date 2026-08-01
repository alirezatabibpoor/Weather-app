"use client";

export default function Error({ error, reset }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-sky-400 via-blue-500 to-indigo-700 px-5">
      <div className="w-full max-w-md rounded-3xl border border-white/30 bg-white/20 p-10 text-center shadow-2xl backdrop-blur-xl">

        <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-red-500/20 text-5xl">
          ⚠️
        </div>

        <h1 className="text-4xl font-bold text-white">
          Something went wrong!
        </h1>

        <p className="mt-4 text-white/80">
          An unexpected error occurred. Please try again.
        </p>

        <button
          onClick={() => reset()}
          className="mt-8 rounded-xl bg-white px-8 py-3 font-bold text-blue-600 shadow-lg transition hover:scale-105 hover:bg-blue-50 active:scale-95"
        >
          🔄 Try Again
        </button>

      </div>
    </div>
  );
}