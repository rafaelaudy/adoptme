import React from "react";
import Pet from "./Pet";

const Results = ({ pets }) => (
  <div className="search">
    {!pets.length ? (
      <h1>No pets found.</h1>
    ) : (
      pets.map(({ id, name, type, breeds, photos, contact }) => (
        <Pet
          key={id}
          id={id}
          name={name}
          animal={type}
          breed={breeds.primary}
          media={photos}
          location={`${contact.address.city}, ${contact.address.state}`}
        ></Pet>
      ))
    )}
  </div>
);

export default Results;
