import React, { useState } from 'react';
import styled from 'styled-components';
import { PortableText } from '@portabletext/react';

const InfoStyles = styled.div`
  .info__content {
    position: fixed;
    height: 100%;
    width: 33.33%;
    bottom: 0;
    padding: 25px 35px;
    background-color: #ff4d00;
    transition: all ease 1s;
  }
  a {
    color: black;
  }
  p {
    text-transform: none;
    padding-bottom: 20px;
  }
  button p {
    padding-bottom: 0;
    text-transform: uppercase;
    position: fixed;
    bottom: 20px;
    right: 35px;
    z-index: 10001 !important;
  }

  button p:hover,
  a:hover {
    text-decoration: underline;
    text-decoration-thickness: 0.5px;
    text-underline-offset: 2px;
  }

  .hidden {
    right: 0%;
  }

  .show {
    right: 0%;
  }
`;

export default function Info({ info, isActive, handleClick }) {
  return (
    <InfoStyles>
      <div className={isActive ? 'info__content show' : 'info__content hidden'}>
        <PortableText value={info} />
      </div>
      <button onClick={handleClick} type="button" className="close__button">
        <p>{isActive ? 'Close' : 'Info'}</p>
      </button>
    </InfoStyles>
  );
}
