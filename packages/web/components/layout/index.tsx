import React from 'react';
import { Forbidden, FullPageLoader, Navbar } from '..';
import { GlobalStyle } from '../../theme';
import { LayoutWrapper, Main } from './styles';
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import { useUser } from '../../hooks/useUser';
import { hasPermission } from '../../lib/hasPermission';
import { PageProps } from '../../types';

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
          href="https://fonts.googleapis.com/css2?family=Itim&family=Poppins:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyle />
      <ToastContainer />
      <Navbar />
      <Main>{hasPermission(pageProps, user) ? children : <Forbidden />}</Main>
    </LayoutWrapper>
  );
};
