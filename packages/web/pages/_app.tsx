import { getDataFromTree } from '@apollo/client/react/ssr';
import type { AppProps } from 'next/app';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from 'styled-components';
import { Roles } from '../graphql/__generated__';
import { useUser } from '../hooks/useUser';
import withApollo from '../lib/withApollo';
import '../styles/globals.css';
import { theme } from '../theme';

function MyApp({ Component, pageProps = {} }: AppProps) {
  const { user } = useUser();

  if (pageProps.protected && !user) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (
    pageProps.protected &&
    user &&
    pageProps.roles &&
    pageProps.roles.some((role: Roles) => user.roles.includes(role))
  ) {
    return (
      <div>
        <h1>Sorry, you don't have access</h1>
      </div>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default withApollo(MyApp, { getDataFromTree });
