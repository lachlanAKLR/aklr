import React from 'react';
import styled from 'styled-components';
import Seconds from './Seconds';
import Minutes from './Minutes';
import Hours from './Hours';
import Weather from './Weather';

const NavStyles = styled.div`
  .nav {
    position: fixed;
    top: 0;
    right: 0%;
    width: 100%;
    display: flex;
    padding: 25px 35px;
    gap: 20px;
    text-transform: uppercase;
    z-index: 7001;
    transition: all ease 1s;
  }

  .active {
    right: 33.33%;
  }

  ul {
    width: 50%;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 20px;
  }

  .nav-site-title {
    grid-column-start: span 2;
  }

  .nav-year {
    grid-column-start: span 2;
  }

  .nav-hours {
    grid-column: 2 / 3;
  }

  .nav-weather {
    grid-column-start: span 2;
    text-align: right;
  }

  @media screen and (max-width: 599px) {
    position: fixed;
    z-index: 9;
    display: block;
    padding: 0;

    ul {
      width: 100vw;
      padding: 5px 10px;
    }

    p {
      grid-column-start: span 12;
      max-width: 500px;
    }

    .nav-hours {
      grid-column: 1 / 2;
    }

    .nav-weather {
      grid-column-start: span 3;
      text-align: left;
    }

    .nav-col-2 {
      position: fixed;
      bottom: 0%;
    }
  }
`;

export default function Nav({ info, isActive, handleClick }) {
  return (
    <NavStyles>
      <div className={isActive ? 'nav active' : 'nav'}>
        <ul className="nav-col-1">
          <li className="nav-site-title">
            <h1>AKLR©</h1>
          </li>
          <li className="nav-year">{new Date().getFullYear()}</li>
          <li className="nav-month">
            {' '}
            {(new Date().getMonth() + 1 < 10 ? '0' : '') +
              (new Date().getMonth() + 1)}
          </li>
          <li className="nav-date">
            {' '}
            {(new Date().getDate() + 0 < 10 ? '0' : '') +
              (new Date().getDate() + 0)}
          </li>
        </ul>
        <ul className="nav-col-2">
          <Hours />
          <Minutes />
          <Seconds />
          <Weather> </Weather>
        </ul>
      </div>
    </NavStyles>
  );
}
