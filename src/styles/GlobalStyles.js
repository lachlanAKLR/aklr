import { createGlobalStyle } from 'styled-components';

import font from '../assets/fonts/ArtCompanyMono-Light.woff';

const GlobalStyles = createGlobalStyle`

* {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
}

body {
  padding: 0;
  margin: 0;
}

@font-face {
    font-family: Art-Company-Mono;
    src: url(${font});
  }

a, p, li, ul, h1, h2 {
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
`;
export default GlobalStyles;
