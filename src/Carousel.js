import React from "react";

class Carousel extends React.Component {
  state = {
    photos: [],
    active: 0
  };

  static getDerivedStateFromProps({ media }) {
    let photos = ["http://placecorgi.com/600/600"];

    if (media.length) {
      photos = media.map(photo => photo.large);
    }

    return { photos };
  }

  setActiveImage = index => {
    this.setState({ active: index });
  };

  render() {
    const { photos, active } = this.state;

    return (
      <div>
        <img src={photos[active]} alt="Pet"></img>
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            //eslint-disable-next-line
            <img
              key={photo}
              src={photo}
              alt={`Pet ${index} thumbnail`}
              className={index === active ? "active" : ""}
              onClick={() => this.setActiveImage(index)}
            ></img>
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
