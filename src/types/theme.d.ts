import 'styled-components';
interface Breakpoints {
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
}

interface ColorPallete {
  white: string;
  mainPrimary: string;
  mainSecondary: string;
  grey: string;
  black: string;
  blue: string;
}

interface Gradients {
  background: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: BreakPoints;
    color: ColorPallete;
    gradient: Gradients;
  }
}
