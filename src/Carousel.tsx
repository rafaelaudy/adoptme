import React from "react";

import { Photo } from "@frontendmasters/pet";

interface IProps {
  media: Photo[];
}

class Carousel extends React.Component<IProps> {
  public state = {
    photos: [] as string[],
    active: 0
  };

  public static getDerivedStateFromProps({ media }: IProps) {
    let photos = ["http://placecorgi.com/600/600"];

    if (media.length) {
      photos = media.map(photo => photo.large);
    }

    return { photos };
  }

  public setActiveImage = (event: React.MouseEvent<HTMLElement>) => {
    if (!(event.target instanceof HTMLElement)) {
      return null;
    }

    if (event.target.dataset.index) {
      this.setState({ active: +event.target.dataset.index });
    }
  };

  public render() {
    const { photos, active } = this.state;

    return (
      <div>
        <img src={photos[active]} alt="Pet" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            <img
              key={photo}
              src={photo}
              alt={`Pet ${index} thumbnail`}
              data-index={index}
              className={index === active ? "active" : ""}
              onClick={this.setActiveImage}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
