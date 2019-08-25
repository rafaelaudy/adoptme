import React from "react";
import { navigate } from "@reach/router";
import pet from "@frontendmasters/pet";

import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";
import Modal from "./Modal";

class Details extends React.Component {
  state = { loading: true, showModal: false };

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
        loading: false,
        url: animal.url
      });
    });
  }

  adoptPet = () => {
    navigate(this.state.url);
  };

  toggleModel = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  render() {
    const {
      loading,
      showModal,
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
          <ThemeContext.Consumer>
            {([theme]) => (
              <button
                style={{ backgroundColor: theme }}
                onClick={this.toggleModel}
              >
                Adopt me
              </button>
            )}
          </ThemeContext.Consumer>

          <p>{description}</p>
          <Carousel media={media}></Carousel>
          {showModal ? (
            <Modal>
              <h1>Would you like to Adopt {name}?</h1>
              <div className="buttons">
                <button onClick={this.adoptPet}>Yes</button>
                <button onClick={this.toggleModel}>Nops</button>
              </div>
            </Modal>
          ) : null}
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
