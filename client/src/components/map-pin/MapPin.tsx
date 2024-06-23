import "./mapPin.scss";
import { Link } from "react-router-dom";
import { Property } from "@/lib/definitions";
import { type LatLngTuple } from "leaflet";
import { Marker, Popup } from "react-leaflet";
// interface MapPinProps extends Property {
//   position: LatLngTuple;
// }

type MapPinProps = {
  item: Property;
};

export function MapPin({ item }: MapPinProps) {
  const position: LatLngTuple = [item.latitude, item.longitude];

  return (
    <Marker position={position}>
      <Popup className="mapPin">
        <div className="">
          <div className="popupContainer">
            <img src={item.img} alt={item.title} />
            <div className="textContainer">
              <Link to={`${item.id}`}>{item.title}</Link>
              <span>
                {item.bathroom} bathroom{item.bathroom > 1 ? "s" : ""}
              </span>
              <b>$ {item.price}</b>
            </div>
          </div>
        </div>
      </Popup>
    </Marker>
  );
}
