import React, { useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Nav from '../components/Nav';
import GlobalStyles from '../styles/GlobalStyles';
import HorizontalImages from '../components/HorizontalImages';
import Info from '../components/Info';
import ImageCarousel from '../components/ImageCarousel';

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

export default function HomePage({ data }) {
  const { layouts } = data.images;
  const info = data.allSanityAbout.nodes[1]._rawContent;

  const [isActive, setIsActive] = useState(null);
  const handleClick = (event) => {
    setIsActive((current) => !current);
  };

  return (
    <>
      <GlobalStyles />
      <Nav info={info} isActive={isActive} handleClick={handleClick} />
      <ImageCarousel layouts={layouts} isActive={isActive} />
      {/* <HorizontalImages layouts={layouts} isActive={isActive} /> */}
      <Info info={info} isActive={isActive} handleClick={handleClick} />
    </>
  );
}

export const query = graphql`
  query {
    images: sanityHomeImages {
      layouts {
        ... on SanitySingleImage {
          _key
          _type
          image {
            asset {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
          caption
          format
          position
          backgroundImage {
            asset {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
        ... on SanityTwoUpImage {
          _key
          _type
          imageOne {
            asset {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
          imageTwo {
            asset {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
          backgroundImage {
            asset {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
          captionOne
          captionTwo
        }
      }
    }
    allSanityAbout {
      nodes {
        _rawContent
        _key
        _id
      }
    }
  }
`;
