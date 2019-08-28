import React, {
  useState,
  useEffect,
  useContext,
  FunctionComponent
} from "react";
import pet, { ANIMALS, Animal } from "@frontendmasters/pet";
import { RouteComponentProps } from "@reach/router";

import useDropDown from "./useDropdown";
import Results from "./Results";
import ThemeContext from "./ThemeContext";

const SearchParams: FunctionComponent<RouteComponentProps> = () => {
  const [location, setLocation] = useState("Seatle, WA");
  const [pets, setPets] = useState([] as Animal[]);
  const [animal, AnimalDropDowns] = useDropDown("Animal", "cat", ANIMALS);
  const [breed, BreedDropDowns, setBreed, setBreeds] = useDropDown(
    "Breed",
    "Mixed",
    []
  );
  const [theme, setTheme] = useContext(ThemeContext);

  useEffect(() => {
    setBreed("");
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

  const onSubmit = (e: React.FormEvent) => {
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
          />
        </label>

        {AnimalDropDowns}
        {BreedDropDowns}

        <button style={{ backgroundColor: theme }}>Submit</button>
      </form>

      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
