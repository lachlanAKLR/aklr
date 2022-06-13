import React from 'react'; 
import styled from 'styled-components';
import Seconds from './Seconds';
import Minutes from './Minutes';
import Hours from './Hours';
import Weather from './Weather';

const NavStyles = styled.div`
  ul {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 20px;
    padding: 25px 35px;
  }

  li:nth-child(1) {
    grid-column-start: span 2;
  }

  li:nth-child(2) {
    grid-column-start: span 2;
  }

  li:nth-child(4) {
    grid-column-start: span 2;
  }

  li:nth-child(8) {
    text-align: right;
    text-transform: uppercase;
    grid-column-start: span 2;
  }

  @media screen and (max-width: 599px) {
    position: fixed;
    z-index: 9;
    ul {
      padding: 15px 10px;
      grid-template-columns: repeat(6, 1fr);
      grid-template-rows: repeat(2, 1fr);
      height: 100vh;
      width: 100vw;
    }

    p {
      grid-column-start: span 12;
      max-width: 500px;
    }

    li:nth-child(4) {
      grid-column-start: span 1;
    }
    li:nth-child(8) {
      grid-column-start: span 3;
    }

    li:nth-child(5),
    li:nth-child(6),
    li:nth-child(7),
    li:nth-child(8) {
      align-self: end;
      grid-row-start: 2;
    }
  }
`;

export default function Nav() {
  return (
    <NavStyles>
      <ul>
        <li>
          <h1>AKLR©</h1>
        </li>
        <li>{new Date().getFullYear()}</li>
        <li>
          {' '}
          {(new Date().getMonth() + 1 < 10 ? '0' : '') +
            (new Date().getMonth() + 1)}
        </li>
        <li>
          {' '}
          {(new Date().getDate() + 0 < 10 ? '0' : '') +
            (new Date().getDate() + 0)}
        </li>
        <Hours />
        <Minutes />
        <Seconds />
        <Weather> </Weather>
      </ul>
    </NavStyles>
  );
}
