import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="ja" style={{ overflowY: "scroll" }}>
        <Head />
        <body className="p-0 m-0 bg-gray-50 overflow-hidde">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
