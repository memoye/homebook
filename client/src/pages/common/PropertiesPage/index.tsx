import "./propertiesPage.scss";
import { propertiesList as data } from "@/lib/dummyData";
import Filter from "@/components/filter/Filter";
import Card from "@/components/card/Card";
import { Map } from "@/components/map/Map";

export default function PropertiesPage() {
  return (
    <div className="propertiesPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          {data.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="mapContainer">
        <Map items={data} />
      </div>
    </div>
  );
}
