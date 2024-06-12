import { latLng } from "leaflet";
import { TileLayer, MapContainer, Marker, Popup } from "react-leaflet";
import MapActivity from "./MapActivity";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

type MapProps = {
  latLng: [number, number];
  setLatLong: ([lat, lng]: [number, number]) => void;
};

const Map = ({ setLatLong, latLng }: MapProps) => {
  return (
    <div className="h-[500px] w-[500px]">
      <MapContainer
        center={[latLng[0], latLng[1]]}
        zoom={11}
        style={{ height: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapActivity setLatLong={setLatLong} />
        <Marker position={[latLng[0], latLng[1]]}>
          <Popup>asdf</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
