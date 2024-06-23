import { type LatLngTuple } from "leaflet";
import "./map.scss";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Property } from "@/lib/definitions";
import { MapPin } from "../map-pin/MapPin";

interface MapProps {
  items: Partial<Property>[];
}

export function Map({ items }: MapProps) {
  const position: LatLngTuple = [items[0].latitude!, items[0].longitude!];

  return (
    <MapContainer
      center={position}
      className="map"
      zoom={12} // initial zoom
      // scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {items.map((item) => (
        <MapPin key={item.id} item={item} />
      ))}
    </MapContainer>
  );
}
