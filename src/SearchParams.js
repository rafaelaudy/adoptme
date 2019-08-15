import React, { useState } from "react";
import { ANIMALS } from "@frontendmasters/pet";

import useDropDown from "./useDropdown";

const SearchParams = () => {
  const [location, setLocation] = useState("Seatle, WA");
  const [, AnimalsDropDowns] = useDropDown("Animal", "Cat", ANIMALS);
  const [, BreedsDropDowns] = useDropDown("Breed", "Mixed", []);

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder={location}
            onChange={e => setLocation(e.target.value)}
          ></input>
        </label>

        {AnimalsDropDowns}
        {BreedsDropDowns}

        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
