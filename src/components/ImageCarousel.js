import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';
import Carousel, { CarouselItem } from './Carousel';
import Layouts from './Layouts';

const ImageCarouselStyles = styled.div`
  .home__layouts {
    width: 100%;
    position: absolute;
    right: 0%;
    transition: all ease 1s;
    background-color: white;
    z-index: 7000;
    box-shadow: 5px 0 10px rgba(0, 0, 0, 0.25);
  }

  .active {
    right: 33.33%;
  }

  .carousel-image {
    padding-top: 30px;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .image-caption {
    padding-top: 10px;
    /* position: absolute;
    bottom: 40px;
    left: 20px;
    width: 100%;
    height: 40px;
    z-index: 8000; */
  }

  .number-caption {
    position: absolute;
    bottom: 20px;
    left: 20px;
  }

  @media screen and (max-width: 599px) {
    .active {
      right: 100%;
    }
    .gatsby-image-wrapper img {
      max-height: 60vh;
    }

    .carousel-image {
      padding-top: 0;
    }

    .number-caption {
      bottom: 40px;
      left: 15px;
    }

    .image-caption {
      white-space: normal;
    }
  }
`;

export default function ImageCarousel({ layouts, isActive }) {
  return (
    <ImageCarouselStyles>
      <div className={isActive ? 'home__layouts active' : 'home__layouts'}>
        <Carousel>
          {layouts.map((layout, index, array) => (
            <CarouselItem layout={layout}>
              {console.log(layout._type)}
              <div className="carousel-image" key={index}>
                <GatsbyImage image={layout.image.asset.gatsbyImageData} />
                <div className="image-caption">{layout.caption}</div>
                <div className="number-caption">
                  {index + 1}/{array.length}
                </div>
              </div>
            </CarouselItem>
          ))}
        </Carousel>
      </div>
    </ImageCarouselStyles>
  );
}
