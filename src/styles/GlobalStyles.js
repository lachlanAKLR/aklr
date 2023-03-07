import { createGlobalStyle } from 'styled-components';

import font from '../assets/fonts/ArtCompanyMono-Light.woff';

const GlobalStyles = createGlobalStyle`

* {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  margin: 0px;
  padding: 0px;
}

body {
  padding: 0;
  margin: 0;
}

/* .nav, .image__caption {
    color: #fff;
    mix-blend-mode: difference;
} */

@font-face {
    font-family: Art-Company-Mono;
    src: url(${font});
  }

a, p, li, ul, h1, h2, button, * {
  font-family: 'Art-Company-Mono', Courier New;
  font-size: 16px;
  line-height: 20px;
  text-decoration: none;
  font-weight: normal;
  list-style: none;
  margin: 0;
  padding: 0;
}

button, input[type="submit"], input[type="reset"] {
	background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
}

  .image__caption {
    position: relative;
    bottom: 40px;
    left: 20px;
  }


  .site__grid {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      gap: 30px;
    }




    /* Carousel */


    .indicators {
      display: flex;
      justify-content: space-between;
      width: 80%;
      margin: auto;
      position: fixed;
      width: 100%;
      height: 40px;
      bottom: 5px;
      /* display: none; */
    }

  .indicators > button {
    /* margin: 5px; */
  }



  .number-caption {
    position: absolute;
    bottom: 20px;
    left: 20px;
  }

   .active-number {
    line-height: 0px;
    /* background-color: #e8ebe4; */
    /* border-radius: 5px; */
    border-bottom: .5px solid black;

  } 

  .arrow-ind {
    font-size: 23px;
    font-weight: normal;
    font-family: Lausanne-500, Arial, Helvetica, sans-serif;
  }

  .number {
    height: 25px;
    margin: 0 7px;
    padding: 5px 5px 7px 5px;
    line-height: 0px;

  } 

  .arrow-left { 
    opacity: 0;
    position: fixed; 
    height: 100%;
    width: 25%;
    top: 0;
    left: 0;
  }

  .arrow-right {
    opacity: 0;
    position: fixed;
    height: 100%;
    width: 25%;
    top: 0;
    right: 0;
  }

  .numbers {
    position: fixed;
    left: 20px;
  }


  
  @media screen and (max-width: 599px) {
    .image__caption {
    bottom: 55px;
    left: 15px;
  }

  font-size: 14px;
  line-height: 20px;
  }
`;
export default GlobalStyles;
