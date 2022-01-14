import type { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';
import '../styles/globals.css';
import { theme } from '../theme';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
