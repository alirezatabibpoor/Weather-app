export default function Loading() {
  return (
    <div className="dark:from-gray-500 dark:via-gray-700 dark:to-gray-800 flex min-h-screen items-center justify-center bg-linear-to-br from-sky-400 via-blue-500 to-indigo-700">
      
      <div className="flex flex-col items-center gap-5">

        {/* Weather Icon */}
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white/20 text-5xl shadow-2xl backdrop-blur-md animate-bounce">
          🌤️
        </div>

        {/* Spinner */}
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-white/30 border-t-white"></div>

        {/* Text */}
        <p className="text-lg font-semibold text-white">
          Loading weather...
        </p>

      </div>

    </div>
  );
}