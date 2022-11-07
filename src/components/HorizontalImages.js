import React, { useState } from 'react';
import styled from 'styled-components';
import Layouts from './Layouts';

const SingleImageStyles = styled.div`
  .blocks {
    width: 100%;
    height: 100vh;
    display: flex;
    position: fixed;
    top: 0;
    right: 0%;
    z-index: 7001;
  }
  .block {
    width: 10%;
    height: 100%;
  }
  .home__layouts {
    width: 100%;
    position: fixed;
    right: 0%;
    transition: all ease 1s;
    background-color: white;
    z-index: 7000;
    box-shadow: 5px 0 10px rgba(0, 0, 0, 0.25);
  }

  .active {
    right: 33.33%;
  }
`;

export default function HorizontalImages({ mousePercent, layouts, isActive }) {
  const [isLayout, setIsLayout] = useState(false);
  const handleHover = (event) => {
    setIsLayout((current) => !current);
  };

  return (
    <SingleImageStyles>
      <div className={isActive ? 'blocks active' : 'blocks'}>
        <div className="block" onMouseEnter={handleHover} />
        <div className="block" onMouseEnter={handleHover} />
        <div className="block" onMouseEnter={handleHover} />
        <div className="block" onMouseEnter={handleHover} />
        <div className="block" onMouseEnter={handleHover} />
        <div className="block" onMouseEnter={handleHover} />
        <div className="block" onMouseEnter={handleHover} />
        <div className="block" onMouseEnter={handleHover} />
        <div className="block" onMouseEnter={handleHover} />
        <div className="block" onMouseEnter={handleHover} />
      </div>
      <div className={isActive ? 'home__layouts active' : 'home__layouts'}>
        {isLayout ? (
          <Layouts layouts={layouts} />
        ) : (
          <Layouts layouts={layouts} />
        )}
      </div>
    </SingleImageStyles>
  );
}
