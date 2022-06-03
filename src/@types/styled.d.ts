import {
  IColors,
  IComponents,
  IComponentsDesktopTypography,
  IComponentsMobileTypography,
} from '../ts/interfaces';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: IColors;
    components: IComponents;
    typography: {
      fontFamily: string;
      desktop: IComponentsDesktopTypography;
      mobile: IComponentsMobileTypography;
    };
  }
}
