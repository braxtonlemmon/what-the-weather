"use client";
import { useEffect, useState } from "react";
import Map from "../components/Map/Map";

export default function Home() {
  const startingPosition: [number, number] = [
    40.77116154675119, -111.9195806980133,
  ];
  const [temperature, setTemperature] = useState<number>();
  const [latLng, setLatLng] = useState<[number, number]>(startingPosition);

  // Fetch weather data on initial render and when latLng changes
  useEffect(() => {
    const getWeather = async () => {
      const res = await fetch("/api/getWeatherData", {
        method: "POST",
        body: JSON.stringify({ latLng }),
      });
      const weatherData = await res.json();
      setTemperature(weatherData.data.currently.temperature);
    };
    getWeather();
  }, [latLng]);

  return (
    <main>
      <p>Temperature: {temperature}</p>

      <Map setLatLong={setLatLng} latLng={latLng} />
    </main>
  );
}
