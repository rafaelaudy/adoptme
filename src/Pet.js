import React from "react";

const Pet = ({ name, animal, breed }) => (
  <div>
    <h1>Name: {name}</h1>
    <h2>Animal: {animal}</h2>
    <h3>Breed: {breed}</h3>
  </div>
);

export default Pet;
