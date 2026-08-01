export default function About() {
  return (
    <div className="min-h-screen bg-linear-to-br from-sky-400 via-blue-500 to-indigo-700 dark:from-gray-400 dark:via-gray-600 dark:to-gray-800 px-6 py-16">

      <div className="mx-auto max-w-4xl">

        {/* Header */}
        <div className="mb-12 text-center text-white">
          <div className="mb-4 text-6xl">🌤️</div>

          <h1 className="text-4xl font-bold md:text-5xl">
            About Weather App
          </h1>

          <p className="mt-4 text-lg text-white/80">
            Your simple and reliable weather companion
          </p>
        </div>

        {/* Main Card */}
        <div className="rounded-3xl border border-white/20 bg-white/15 p-8 text-white shadow-2xl backdrop-blur-md md:p-12">

          <h2 className="mb-4 text-2xl font-bold">
            About This App
          </h2>

          <p className="leading-8 text-white/85">
            Weather App is a simple application that helps you check
            current weather information for cities around the world.
            You can search for a city and view its temperature,
            weather condition, humidity, and weather icon.
          </p>

          {/* Features */}
          <div className="mt-10 grid gap-5 md:grid-cols-3">

            <div className="rounded-2xl bg-white/15 p-5 text-center">
              <div className="text-4xl">🌍</div>
              <h3 className="mt-3 font-bold">Global Cities</h3>
              <p className="mt-2 text-sm text-white/70">
                Search for cities around the world.
              </p>
            </div>

            <div className="rounded-2xl bg-white/15 p-5 text-center">
              <div className="text-4xl">🌡️</div>
              <h3 className="mt-3 font-bold">Live Weather</h3>
              <p className="mt-2 text-sm text-white/70">
                Get current weather information.
              </p>
            </div>

            <div className="rounded-2xl bg-white/15 p-5 text-center">
              <div className="text-4xl">⚡</div>
              <h3 className="mt-3 font-bold">Fast & Simple</h3>
              <p className="mt-2 text-sm text-white/70">
                Quick and easy weather search.
              </p>
            </div>

          </div>

          {/* Footer */}
          <div className="mt-10 border-t border-white/20 pt-6 text-center text-sm text-white/60">
            Powered by OpenWeather API
          </div>

        </div>

      </div>

    </div>
  );
}