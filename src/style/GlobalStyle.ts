import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
  position: relative;
  min-height: 100%;
}
body {
  background-color: ${({ theme }) => theme.colors.white}
}
* {
  font-family: ${({ theme }) => theme.typography.fontFamily};
}
`;

export default GlobalStyle;
