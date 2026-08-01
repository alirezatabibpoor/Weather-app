"use client";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";

export default function WeatherMapClient({
  lat,
  lon,
  city,
  temp,
}) {
  return (
    <div className="mt-8 overflow-hidden rounded-3xl shadow-2xl">

      <MapContainer
        center={[lat, lon]}
        zoom={11}
        scrollWheelZoom={true}
        className="h-100 w-full"
      >

        <TileLayer
          attribution="© OpenStreetMap"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={[lat, lon]}>
          <Popup>
            <div className="text-center">
              <h3 className="font-bold">
                {city}
              </h3>

              <p>
                🌡️ {Math.round(temp)}°C
              </p>
            </div>
          </Popup>
        </Marker>

      </MapContainer>

    </div>
  );
}