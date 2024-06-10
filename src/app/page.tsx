'use client'
import Image from 'next/image'
import {
  TileLayer,
  MapContainer,
  Marker,
  Popup,
  useMapEvents,
} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import {useEffect, useState} from 'react'

type TestProps = {
  setLatLng: ([lat, lng]: [number, number]) => void
}

const Test: React.FC<TestProps> = ({setLatLng}) => {
  const map = useMapEvents({
    click: (e) => {
      console.log('tag lat, long', e.latlng.lat, e.latlng.lng)
      setLatLng([e.latlng.lat, e.latlng.lng])
    },
  })
  return null
}

export default function Home() {
  const [temperature, setTemperature] = useState<number>()
  const [latLng, setLatLng] = useState<[number, number]>([
    40.77116154675119, -111.9195806980133,
  ])

  useEffect(() => {
    const getWeather = async () => {
      const res = await fetch(
        `https://api.pirateweather.net/forecast/tbilmhC61Np5bKOBMtCe3Xj2Yo7SyslA/${latLng[0]},${latLng[1]}`
      )
      const json = await res.json()
      console.log('tag json', json)
      setTemperature(json.currently.temperature)
    }
    getWeather()
  }, [latLng])

  return (
    <main>
      <p>Temperature: {temperature}</p>
      <div style={{height: '500px', width: '500px'}}>
        <MapContainer
          center={[40.77116154675119, -111.9195806980133]}
          zoom={16}
          style={{height: '100%'}}
        >
          <Test setLatLng={setLatLng} />
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[latLng[0], latLng[1]]}>
            <Popup>yeah</Popup>
          </Marker>
        </MapContainer>
      </div>
    </main>
  )
}
