import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '../components/GlobalStyle';
import { appTheme } from '../constants/theme';

if (typeof window === 'undefined') {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  require('../mocks/server').server.listen();
} else {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  require('../mocks/browser').worker.start();
}

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
