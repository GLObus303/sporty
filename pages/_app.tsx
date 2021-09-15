import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '../components/GlobalStyle';
import { appTheme } from '../constants/theme';

const CustomApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <GlobalStyle />

    <ThemeProvider theme={appTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  </>
);

export default CustomApp;
