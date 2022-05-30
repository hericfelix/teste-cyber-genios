export interface IComponentsTypography {
  button: {
    mdSize: string;
    smSize: string;
    weight: number;
  };
  p: {
    size?: string;
    mdSize?: string;
    smSize?: string;
    mdWeight: number;
    smWeight: number;
  };
  h1: {
    weight: number;
    size: string;
  };
  h2: {
    weight: number;
    size: string;
  };
}

export interface IComponents {
  button: {
    sqBorder: string;
    rdBorder: string;
    smPadding: string;
    mdPadding: string;
  };
  input: {
    border: string;
  };
}

export interface IColors {
  primary: string;
  secondary: string;
  tertiary: string;
  white: string;
}
