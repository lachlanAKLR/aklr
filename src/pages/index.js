import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Nav from '../components/Nav';
import GlobalStyles from '../styles/GlobalStyles';
import HoverPhotos from '../components/HoverPhotos';

const HomeStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 20px;
  top: 130px;
  padding: 5px 35px;
  text-transform: uppercase;
  position: fixed;
  z-index: 10;
  width: 100%;

  p {
    grid-column-start: span 7;
    max-width: 600px;
  }

  @media screen and (max-width: 599px) {
    padding: 5px 10px;

    p {
      grid-column-start: span 12;
      max-width: 500px;
    }
  }
`;

function showThird() {
  const hoverImage = document.getElementsByClassName('gatsby-image-wrapper')[2];
  const caption = document.getElementsByClassName('photo_caption')[2];
  hoverImage.style.opacity = '1';
  caption.style.opacity = '1';
}

function hideThird() {
  const hoverImage = document.getElementsByClassName('gatsby-image-wrapper')[2];
  const caption = document.getElementsByClassName('photo_caption')[2];
  hoverImage.style.opacity = '0';
  caption.style.opacity = '0';
}

export default function HomePage({ data }) {
  const abouts = data.about.nodes;
  const photos = data.photos.nodes;
  return (
    <>
      <GlobalStyles />
      <Nav />
      <HomeStyles onMouseOver={showThird} onMouseLeave={hideThird}>
        {abouts.map((about) => (
          <p>{about.text}</p>
        ))}
      </HomeStyles>
      <HoverPhotos photos={photos}>Home Page</HoverPhotos>
    </>
  );
}

export const query = graphql`
  query AboutQueryandPhotosQuery {
    about: allSanityAbout {
      nodes {
        text
        title
      }
    }
    photos: allSanityPhotos {
      nodes {
        caption
        id
        image {
          asset {
            gatsbyImageData(fit: FILLMAX, placeholder: DOMINANT_COLOR)
          }
        }
      }
    }
  }
`;
