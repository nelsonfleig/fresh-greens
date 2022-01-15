import { getDataFromTree } from '@apollo/client/react/ssr';
import type { AppProps } from 'next/app';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from 'styled-components';
import { FullPageLoader, Layout } from '../components';
import { Forbidden } from '../components/common/forbidden';
import { Role } from '../graphql/__generated__';
import { useUser } from '../hooks/useUser';
import { hasPermission } from '../lib/checkRoles';
import withApollo from '../lib/withApollo';
import '../styles/globals.css';
import { theme } from '../theme';

function MyApp({ Component, pageProps = {} }: AppProps) {
  const { user, loading, error } = useUser();

  console.log(user, error);

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        {loading ? (
          <FullPageLoader />
        ) : !hasPermission(pageProps, user) ? (
          <Forbidden />
        ) : (
          <Component {...pageProps} />
        )}
      </Layout>
    </ThemeProvider>
  );
}

export default withApollo(MyApp, { getDataFromTree });
