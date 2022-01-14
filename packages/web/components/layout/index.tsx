import React from 'react';
import { Navbar } from '..';
import { GlobalStyle } from '../../theme';
import { LayoutWrapper, Main } from './styles';
import Head from 'next/head';

interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
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
      <Navbar />
      <Main>{children}</Main>
    </LayoutWrapper>
  );
};
