import { DefaultTheme } from 'styled-components';

export const defaultTheme: DefaultTheme = {
  breakpoints: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1024px',
    xxl: '1400px',
  },
  color: {
    white: '#FFFFFF',
    mainPrimary: '#28313B',
    mainSecondary: '#485461',
    black: '#212121',
    grey: '#777777',
    blue: '#1F86F9',
  },
  gradient: {
    background: 'linear-gradient(302.28deg, #28313B 24.64%, #485461 76.42%)',
  },
};

export type Breakpoints = typeof defaultTheme.breakpoints;
export type BreakpointsList = keyof typeof defaultTheme.breakpoints;
