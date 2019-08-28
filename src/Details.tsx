import React from "react";
import { navigate, RouteComponentProps } from "@reach/router";
import pet, { Photo } from "@frontendmasters/pet";

import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";
import Modal from "./Modal";

class Details extends React.Component<RouteComponentProps<{ id: string }>> {
  public state = {
    loading: true,
    showModal: false,
    name: "",
    animal: "",
    location: "",
    breed: "",
    media: [] as Photo[],
    description: "",
    url: ""
  };

  public componentDidMount() {
    const { id } = this.props;

    if (!id) {
      navigate("/");
      return;
    }

    pet.animal(+id).then(({ animal }) => {
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

  public adoptPet = () => {
    navigate(this.state.url);
  };

  public toggleModel = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  public render() {
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
          <Carousel media={media} />
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

export default function DatailsWithErrorBoundary(
  props: RouteComponentProps<{ id: string }>
) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}
