import { useMapEvents } from "react-leaflet";

type MapActivityProps = {
  setLatLong: ([lat, lng]: [number, number]) => void;
};

const MapActivity = ({ setLatLong }: MapActivityProps) => {
  const map = useMapEvents({
    click: (e) => {
      console.log("tag e", e.latlng.lat, e.latlng.lng);
      setLatLong([e.latlng.lat, e.latlng.lng]);
    },
  });
  return null;
};

export default MapActivity;
