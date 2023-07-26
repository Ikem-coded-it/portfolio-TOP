import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "Playfair Display";
    src: url("../../assets/fonts/Playfair_Display/PlayfairDisplay-VariableFont_wght.ttf");
  }

  @font-face {
    font-family: Roboto;
    src: url("../../assets/fonts/Roboto/Roboto-Regular.ttf");
  }

  :root {
    --font-light-dark: #cbd5e1;
    --font-dark-dark: #374151;
    --bg-color: #0891b2;
  }

  body {
    max-height: fit-content;
    min-height: 100vh;
    min-width: 99.8vw;
    max-width: 99.8vw;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    overflow-x: hidden;
    scrollbar-gutter: stable;
  }
`

export default GlobalStyles;