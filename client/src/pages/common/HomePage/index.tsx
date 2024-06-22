import "./homePage.scss";
import SearchBar from "../../../components/searchbar";

export default function HomePage() {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <section>
            <h1 className="title">Discover Spaces That Inspire Living.</h1>
            <p>
              Explore a vast selection of houses, apartments, and condos
              tailored to your lifestyle and budget
            </p>
          </section>

          <SearchBar />
          <div className="boxesContainer">
            <p className="box">
              <span className="title">16+</span>
              <span className="label">Years of Experience</span>
            </p>

            <p className="box">
              <span className="title">200</span>
              <span className="label">Awards Gained</span>
            </p>

            <p className="box">
              <span className="title">1200+</span>
              <span className="label">Properties Ready</span>
            </p>
          </div>
        </div>
      </div>
      <div className="imageContainer">
        <div className="overlayGradient" />
        {[
          "/images/c_house-1.png",
          "/images/c_house-2.png",
          "/images/c_house-3.png",
        ].map((img, i) => (
          <img
            key={img + i}
            src={img}
            alt="colorful cartoon house"
            className={`img img${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
