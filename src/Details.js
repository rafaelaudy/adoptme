import React from "react";
import pet from "@frontendmasters/pet";

import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
class Details extends React.Component {
  state = { loading: true };

  componentDidMount() {
    const { id } = this.props;

    pet.animal(id).then(({ animal }) => {
      this.setState({
        name: animal.name,
        animal: animal.type,
        location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
        breed: animal.breeds.primary,
        media: animal.photos,
        description: animal.description,
        loading: false
      });
    });
  }

  render() {
    const {
      loading,
      name,
      animal,
      location,
      breed,
      description,
      media
    } = this.state;

    return loading ? (
      <h1>loading ...</h1>
    ) : (
      <div className="details">
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${location}`}</h2>
          <button>Adopt me</button>
          <p>{description}</p>
          <Carousel media={media}></Carousel>
        </div>
      </div>
    );
  }
}

export default function DatailsWithErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props}></Details>
    </ErrorBoundary>
  );
}
