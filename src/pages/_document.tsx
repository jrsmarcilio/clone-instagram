import React from 'react';
import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/styles';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt">
        <Head>

          <meta charSet="UTF-8" />

          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
          <link
            rel="shortcut icon"
            href="/image/shortcut-icon.jpg"
            type="image/x-icon"
          />

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx: DocumentContext) => {

  const materialSheet = new ServerStyleSheets();
  const styledComponentSheet = new ServerStyleSheet();
  const originalRenderPage = ctx.renderPage;

  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) =>
          styledComponentSheet.collectStyles(
            materialSheet.collect(<App {...props} />),
          ),
      });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: [
        ...React.Children.toArray(initialProps.styles),
        materialSheet.getStyleElement(),
        styledComponentSheet.getStyleElement(),
      ],
    };
  } finally {
    styledComponentSheet.seal();
  }
};

export default MyDocument;
