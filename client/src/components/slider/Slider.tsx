import "./slider.scss";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  FullscreenIcon,
  XIcon,
} from "lucide-react";
import { useSliderContext } from "@/context/sliderContext";
import { useRef, useState } from "react";

type SliderProps = {
  images: string[];
  title: string;
};

export function Slider({ images, title }: SliderProps) {
  const LAST_IMAGE = images.length - 1,
    FIRST_IMAGE = 0;

  const { focusImage, fullscreen, focussed, fullscreenSwitch } =
    useSliderContext();

  const previousImage = focussed === FIRST_IMAGE ? LAST_IMAGE : focussed - 1;
  const nextImage = focussed === LAST_IMAGE ? FIRST_IMAGE : focussed + 1;

  const fullscreenFocussedRef = useRef<HTMLImageElement | null>(null);

  const [anim, setAnim] = useState("");

  function fullscreenOn() {
    fullscreenSwitch(true);
  }

  function fullscreenOff() {
    fullscreenSwitch(false);
  }

  function goToPrev() {
    focusImage(previousImage)();
    setAnim("fromLeft");
  }

  function goToNext() {
    focusImage(nextImage)();
    setAnim("fromRight");
  }

  function jumpTo(img: string) {
    focusImage(images.indexOf(img))();
    setAnim("fadeIn");
  }

  return (
    <>
      <div className="slider">
        <div className="focussedImg" key={focussed}>
          <img src={images[focussed]} />
          <button type="button" title="Fullscreen" onClick={fullscreenOn}>
            <FullscreenIcon />
          </button>
        </div>
        <div className="otherImgs">
          {images
            .filter((img) => img !== images[focussed])
            .map((image, i) => (
              <button
                key={image + i}
                type="button"
                onClick={focusImage(images.indexOf(image))}
              >
                <span className="sr-only">
                  {title} inage thumbnail {i}
                </span>
                <img src={image} alt={title + " " + (i + 1)} />
              </button>
            ))}
        </div>

        {fullscreen && (
          <div className="fullscreenSlider" style={{ paddingRight: 0 }}>
            <div className={"innerWrapper"}>
              <button
                type="button"
                onClick={fullscreenOff}
                title="Exit Fullscreen"
              >
                <XIcon />
              </button>

              <div className="imgContainer">
                <img
                  ref={fullscreenFocussedRef}
                  src={images[focussed]}
                  alt={title + " " + focussed}
                  className={anim}
                  key={focussed}
                />
                <div className="thumbnailsContainer">
                  <div className="thumbnailsWrapper">
                    {images.map((img, i) => (
                      <button
                        className={images[focussed] === img ? "active" : ""}
                        key={img + 1}
                        type="button"
                        onClick={() => jumpTo(img)}
                      >
                        <span className="sr-only">
                          Jump to image {images.indexOf(img)} of {images.length}
                        </span>
                        <img src={img} alt={title + " " + (i + 1)} />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="imgNavContainer" key={focussed}>
                <button onClick={goToPrev} type="button">
                  <span className="sr-only">Previous Image</span>
                  <ChevronLeftIcon />
                </button>
                <button onClick={goToNext} type="button">
                  <span className="sr-only">Next Image</span>
                  <ChevronRightIcon />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
