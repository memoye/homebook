import { Slider } from "@/components/slider/Slider";
import "./propertyPage.scss";
import { singlePropertyData as data, userData } from "@/lib/dummyData";
import { MapPinIcon } from "lucide-react";
import { useSliderContext } from "@/context/sliderContext";

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
        <div className="wrapper"></div>
      </div>
    </div>
  );
}
