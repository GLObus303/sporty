import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';

import { GlobalStyle } from '../components/GlobalStyle';

const CustomApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <GlobalStyle />

    <Component {...pageProps} />
  </>
);

export default CustomApp;
