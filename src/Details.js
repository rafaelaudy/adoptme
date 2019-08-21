import React from "react";
import pet from "@frontendmasters/pet";
class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

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
    const { loading, name, animal, location, breed, description } = this.state;

    return loading ? (
      <h1>loading ...</h1>
    ) : (
      <div className="details">
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${location}`}</h2>
          <button>Adopt me</button>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

export default Details;
