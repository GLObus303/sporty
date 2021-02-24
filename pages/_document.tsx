import React from 'react';
import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

type DocumentProps = {
  styleTags: string;
};

class MyDocument extends Document<DocumentProps> {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();

    try {
      const page = ctx.renderPage((App) => (props) =>
        sheet.collectStyles(<App {...props} />),
      );

      const styleTags = sheet.getStyleElement();
      const initialProps = await Document.getInitialProps(ctx);

      return { ...initialProps, ...page, styleTags };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en-us">
        <Head>
          <meta charSet="utf-8" />
          {this.props.styleTags}
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
