import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Sigmar One';
    src: url('@fonts/SigmarOne-Regular.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Noto Serif';
    src: url('@fonts/NotoSerif-VariableFont_wdth,wght.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Special Elite';
    src: url('@fonts/SpecialElite-Regular.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Poppins Bold';
    src: url('@fonts/Poppins-Bold.ttf') format('truetype');
  }

  body {
    font-family: 'Noto Serif', sans-serif;
    margin: 0;
    padding: 0;
  }
`;
