import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from 'styled-components';
import { Layout } from '../components';
import { CartProvider } from '../context';
import { useApollo } from '../lib/apolloClient';
import '../styles/globals.css';
import { theme } from '../theme';

function MyApp({ Component, pageProps = {} }: AppProps) {
  const apolloClient = useApollo(pageProps);

  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={apolloClient}>
        <CartProvider>
          <Layout pageProps={pageProps}>
            <Component {...pageProps} />
          </Layout>
        </CartProvider>
      </ApolloProvider>
    </ThemeProvider>
  );
}

export default MyApp;
