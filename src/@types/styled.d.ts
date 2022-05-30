import { IColors, IComponents, IComponentsTypography } from '../ts/interfaces';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: IColors;
    components: IComponents;
    typography: {
      fontFamily: string;
      desktop: IComponentsTypography;
      mobile: IComponentsTypography;
    };
  }
}
