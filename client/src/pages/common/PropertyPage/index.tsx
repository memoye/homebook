import { Slider } from "@/components/slider/Slider";
import "./propertyPage.scss";
import { singlePropertyData as data, userData } from "@/lib/dummyData";
import {
  BathIcon,
  BedIcon,
  BookmarkPlusIcon,
  BusIcon,
  CircleDollarSignIcon,
  ExpandIcon,
  MapPinIcon,
  MessageSquareTextIcon,
  PawPrint,
  SchoolIcon,
  UserCheck2Icon,
  UtensilsIcon,
} from "lucide-react";
import { useSliderContext } from "@/context/sliderContext";
import { Map } from "@/components/map/Map";

export default function Property() {
  const { fullscreen } = useSliderContext();

  return (
    <div className="propertyPage">
      <div className="details">
        <div className={`wrapper ${fullscreen ? "fullscreenActive" : ""}`}>
          <Slider images={data.images} title={data.title} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{data.title}</h1>
                <div className="address">
                  <MapPinIcon />
                  <span>{data.address}</span>
                </div>

                <div className="price">${data.price.toLocaleString()}</div>
              </div>
              <div className="user">
                <img src={userData.img} alt={userData.name} />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="bottom">
              <p>{data.description}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <section>
            <h2 className="title">General</h2>
            <ul className="listVertical">
              <li className="feature">
                <UserCheck2Icon />
                <span>
                  <strong>Utilities</strong>
                  <span>Renter is responsible</span>
                </span>
              </li>
              <li className="feature">
                <PawPrint />
                <span>
                  <strong>Pet Policy</strong>
                  <span>Pets Allowed</span>
                </span>
              </li>
              <li className="feature">
                <CircleDollarSignIcon />
                <span>
                  <strong>Property Fees</strong>
                  <span>Must have 3x the rent in total household income</span>
                </span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="title">Room Sizes</h2>
            <ul className="sizes">
              <li className="size">
                <ExpandIcon />
                <span>80 sqft</span>
              </li>
              <li className="size">
                <BedIcon />
                <span>2 Beds</span>
              </li>
              <li className="size">
                <BathIcon />
                <span>2 Baths</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="title">Nearby Places</h2>
            <ul className="listHorizontal">
              <li className="feature">
                <SchoolIcon />
                <span>
                  <strong>School</strong>
                  <span>250km away</span>
                </span>
              </li>
              <li className="feature">
                <BusIcon />
                <span>
                  <strong>Bus Stop</strong>
                  <span>100km away</span>
                </span>
              </li>
              <li className="feature">
                <UtensilsIcon />
                <span>
                  <strong>Restaurant</strong>
                  <span>200m away</span>
                </span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="title">Location</h2>
            <div className="mapContainer">
              <Map items={[data]} />
            </div>
          </section>

          <div className="actions">
            <button>
              <MessageSquareTextIcon />
              <span>Message</span>
            </button>
            <button>
              <BookmarkPlusIcon />
              <span>Save</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
