"use client";
import Image from "next/image";
import {
  TileLayer,
  MapContainer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import { useEffect, useState } from "react";
import Map from "../components/Map";

export default function Home() {
  const [temperature, setTemperature] = useState<number>();
  const [latLng, setLatLng] = useState<[number, number]>([
    40.77116154675119, -111.9195806980133,
  ]);

  useEffect(() => {
    const getWeather = async () => {
      const res = await fetch(
        `https://api.pirateweather.net/forecast/tbilmhC61Np5bKOBMtCe3Xj2Yo7SyslA/${latLng[0]},${latLng[1]}`,
      );
      const json = await res.json();
      console.log("tag json", json);
      setTemperature(json.currently.temperature);
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
