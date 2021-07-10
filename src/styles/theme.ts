import { DefaultTheme } from 'styled-components';

export const defaultTheme: DefaultTheme = {
  breakpoints: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1400px',
  },
  color: {
    white: '#FFFFFF',
    black: '#212121',
    grey: '#777777',
  },
};

export type Breakpoints = typeof defaultTheme.breakpoints;
export type BreakpointsList = keyof typeof defaultTheme.breakpoints;
