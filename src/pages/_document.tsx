import { Fragment } from "react";
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import CssBaseline from "@geist-ui/core/dist/css-baseline/index";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    const styles = CssBaseline.flush();

    return {
      ...initialProps,
      styles: [
        <Fragment key="1">
          {initialProps.styles}
          {styles}
        </Fragment>,
      ],
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="keywords"
            content="zellr, nextjs, portfolio, react, javascript, js, ts, typescript, velo, veloi, veloii"
          />
          <meta name="language" content="English" />
          <meta name="revisit-after" content="5 days" />
          <meta name="author" content="veloi" />
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
