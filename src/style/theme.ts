import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    primary: '#1D2527',
    secondary: '#AFAFAF',
    tertiary: '#D2D4D9',
    white: '#EBEFF2',
  },
  components: {
    button: {
      sqBorder: '2.5px',
      rdBorder: '21px',
      smPadding: '0.25rem 3.5rem',
      mdPadding: '0.5rem 4.5rem',
    },
    input: {
      border: '0.375rem',
    },
  },
  typography: {
    fontFamily: 'Montserrat',
    desktop: {
      button: {
        mdSize: '1.25rem',
        smSize: '1rem',
        weight: 500,
      },
      p: {
        mdSize: '1.25rem',
        smSize: '1rem',
        mdWeight: 300,
        smWeight: 400,
      },
      h1: {
        weight: 400,
        size: '3.5rem',
      },
      h2: {
        weight: 400,
        size: '1.5rem',
      },
    },
    mobile: {
      button: {
        mdSize: '1.25rem',
        smSize: '1rem',
        weight: 500,
      },
      p: {
        size: '1rem',
        mdWeight: 300,
        smWeight: 400,
      },
      h1: {
        weight: 400,
        size: '2rem',
      },
      h2: {
        weight: 400,
        size: '1.5rem',
      },
    },
  },
};
