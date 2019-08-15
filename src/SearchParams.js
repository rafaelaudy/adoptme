import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";

import useDropDown from "./useDropdown";

const SearchParams = () => {
  const [location, setLocation] = useState("Seatle, WA");
  const [animal, AnimalDropDowns] = useDropDown("Animal", "cat", ANIMALS);
  const [, BreedDropDowns, setBreed, setBreeds] = useDropDown(
    "Breed",
    "Mixed",
    []
  );

  useEffect(() => {
    setBreed();
    setBreeds([]);

    pet
      .breeds(animal)
      .then(({ breeds }) => {
        setBreeds(breeds.map(({ name }) => name));
      })
      .catch();
  }, [animal, setBreed, setBreeds]);

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

        {AnimalDropDowns}
        {BreedDropDowns}

        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
