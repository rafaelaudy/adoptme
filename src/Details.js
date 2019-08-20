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
        loading: false
      });
    });
  }

  render() {
    const { loading } = this.state;

    return loading ? <div>loading</div> : <div>Info</div>;
  }
}

export default Details;
