import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";

import useDropDown from "./useDropdown";

const SearchParams = () => {
  const [location, setLocation] = useState("Seatle, WA");
  const [, setPets] = useState([]);
  const [animal, AnimalDropDowns] = useDropDown("Animal", "cat", ANIMALS);
  const [breed, BreedDropDowns, setBreed, setBreeds] = useDropDown(
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

  async function requestPets() {
    const { animals } = await pet.animals({ location, type: animal, breed });
    setPets(animals || []);
  }

  const onSubmit = e => {
    e.preventDefault();
    requestPets();
  };

  return (
    <div className="search-params">
      <form onSubmit={onSubmit}>
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
