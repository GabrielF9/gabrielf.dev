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
  grey: string;
  black: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: BreakPoints;
    color: ColorPallete;
  }
}
