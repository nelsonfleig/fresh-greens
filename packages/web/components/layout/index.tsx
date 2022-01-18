import Head from 'next/head';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Forbidden, FullPageLoader, Navbar } from '..';
import { useUser } from '../../hooks/useUser';
import { hasPagePermission } from '../../lib/permissionsCheck';
import { GlobalStyle } from '../../theme';
import { PageProps } from '../../types';
import { LayoutWrapper, Main } from './styles';

interface Props {
  children: React.ReactNode;
  pageProps: PageProps;
}

export const Layout = ({ children, pageProps }: Props) => {
  const { user, loading } = useUser();

  return loading ? (
    <FullPageLoader />
  ) : (
    <LayoutWrapper>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Itim&family=Poppins:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyle />
      <ToastContainer />
      <Navbar />
      <Main>{hasPagePermission(pageProps, user) ? children : <Forbidden />}</Main>
    </LayoutWrapper>
  );
};
