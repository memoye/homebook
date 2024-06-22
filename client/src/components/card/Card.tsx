import { Property } from "@/lib/definitions";
import "./card.scss";
import { Link } from "react-router-dom";
import {
  BathIcon,
  BedIcon,
  DollarSignIcon,
  MapPinIcon,
  MessageSquareMore,
  SaveIcon,
} from "lucide-react";

type CardProps = {
  item: Property;
};

export default function Card({ item }: CardProps) {
  return (
    <div className="card">
      <Link to={`/properties/${item.id}`} className="imageContainer">
        <img src={item.img} alt={item.title} />
      </Link>
      <div className="textContainer">
        <h2 className="title">
          <Link to={`/properties/${item.id}`}>{item.title}</Link>
        </h2>
        <p className="address">
          <MapPinIcon className="icon" />
          <strong className="sr-only">Address: </strong>
          <span>{item.address}</span>
        </p>

        <p className="price">
          <DollarSignIcon className="icon" />
          <strong className="sr-only">Price: </strong>
          <span>{item.price}</span>
        </p>

        <div className="bottom">
          <div className="featuresWrapper">
            <div className="feature">
              <BedIcon />
              <span>
                {item.bedroom} bedroom{item.bedroom > 1 ? "s" : ""}
              </span>
            </div>
            <div className="feature">
              <BathIcon />
              <span>
                {item.bathroom} bathroom{item.bathroom > 1 ? "s" : ""}
              </span>
            </div>
          </div>
          <div className="actionsWrapper">
            <button className="action">
              <span className="sr-only">Save Property</span>
              <SaveIcon />
            </button>
            <button className="action">
              <span className="sr-only">Message Agent</span>
              <MessageSquareMore />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
