import React, { useState, useEffect, useContext } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";

import useDropDown from "./useDropdown";
import Results from "./Results";
import ThemeContext from "./ThemeContext";

const SearchParams = () => {
  const [location, setLocation] = useState("Seatle, WA");
  const [pets, setPets] = useState([]);
  const [animal, AnimalDropDowns] = useDropDown("Animal", "cat", ANIMALS);
  const [breed, BreedDropDowns, setBreed, setBreeds] = useDropDown(
    "Breed",
    "Mixed",
    []
  );
  const [theme, setTheme] = useContext(ThemeContext);

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
    setTheme(theme === "blue" ? "green" : "blue");
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

        <button style={{ backgroundColor: theme }}>Submit</button>
      </form>

      <Results pets={pets}></Results>
    </div>
  );
};

export default SearchParams;
