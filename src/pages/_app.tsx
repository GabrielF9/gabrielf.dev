import type { AppProps } from 'next/app';
import { GlobalStyles } from '../styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  );
}
export default MyApp;
