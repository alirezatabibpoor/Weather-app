
export const getWindDirection = (deg) => {
  if (deg >= 337.5 || deg < 22.5) return "N";
  if (deg < 67.5) return "NE";
  if (deg < 112.5) return "E";
  if (deg < 157.5) return "SE";
  if (deg < 202.5) return "S";
  if (deg < 247.5) return "SW";
  if (deg < 292.5) return "W";
  return "NW";
};

export const getCloudStatus = (clouds) => {
  if (clouds <= 10) return "Clear Sky ☀️";
  if (clouds <= 30) return "Mostly Clear 🌤️";
  if (clouds <= 60) return "Partly Cloudy ⛅";
  if (clouds <= 90) return "Mostly Cloudy ☁️";
  return "Overcast 🌥️";
};

  export const isPersian = (text) => {
    return /[\u0600-\u06FF]/.test(text);
  };


  export const getUVStatus = (uv) => {
  if (uv <= 2) return "🟢 Low";
  if (uv <= 5) return "🟡 Moderate";
  if (uv <= 7) return "🟠 High";
  if (uv <= 10) return "🔴 Very High";
  return "🟣 Extreme";
};

export const getUVColor = (uv) => {
  if (uv <= 2) return "bg-green-500";
  if (uv <= 5) return "bg-yellow-400";
  if (uv <= 7) return "bg-orange-500";
  if (uv <= 10) return "bg-red-500";
  return "bg-purple-600";
};

export const getCityDateTime = (now, timezone) => {
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;

  const cityTime = new Date(utc + timezone * 1000);

  return {
    time: cityTime.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }),

    date: cityTime.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
  };
};
  export const getPollutantColor = (value) => {
  if (value <= 20) return "bg-green-500";
  if (value <= 40) return "bg-yellow-400";
  if (value <= 60) return "bg-orange-500";
  if (value <= 100) return "bg-red-500";
  return "bg-purple-600";
};

export const getPollutantPercent = (value, max = 100) => {
  return Math.min((value / max) * 100, 100);
};

export const getSunProgress = (sunrise, sunset) => {
  const now = Date.now() / 1000;

  if (now <= sunrise) return 0;
  if (now >= sunset) return 100;

  return ((now - sunrise) / (sunset - sunrise)) * 100;
};