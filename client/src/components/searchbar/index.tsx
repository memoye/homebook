import { SearchIcon } from "lucide-react";
import "./searchbar.scss";
import { useState } from "react";

const TYPES: Array<"buy" | "rent"> = ["buy", "rent"];

export default function SearchBar() {
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  function toggleType(nextType: "buy" | "rent") {
    return () => setQuery((prev) => ({ ...prev, type: nextType }));
  }

  return (
    <div className="searchBar">
      <div className="type">
        {TYPES.map((t) => (
          <button
            className={query.type === t ? "active" : ""}
            key={t}
            type="button"
            onClick={toggleType(t)}
          >
            {t}
          </button>
        ))}
      </div>

      <form>
        <input
          type="text"
          name="location"
          id="location"
          placeholder="City Location"
        />
        <input
          type="number"
          name="minPrice"
          id="minPrice"
          min={0}
          max={100_000_000_000}
          placeholder="Min. Price"
        />
        <input
          type="text"
          id="maxPrice"
          name="maxPrice"
          min={0}
          max={100_000_000_000}
          placeholder="Max. Price"
        />

        <button className="searchBtn">
          <SearchIcon className="icon" />
          <span className="sr-only">Search</span>
        </button>
      </form>
    </div>
  );
}
