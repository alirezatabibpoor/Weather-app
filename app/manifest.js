export default function manifest() {
  return {
    name: "Weather App",
    short_name: "Weather",
    description: "Modern Weather Application",

    start_url: "/",

    display: "standalone",

    background_color: "#0f172a",

    theme_color: "#3b82f6",

    icons: [
      {
        src: "/my-app/public/weather.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
  };
}