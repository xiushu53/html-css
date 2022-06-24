import "../src/style/index.css";

import type { CustomAppPage } from "next/app";
import Head from "next/head";

const App: CustomAppPage = ({ Component, pageProps }) => {
  const getLayout =
    Component.getLayout ||
    ((page) => {
      return page;
    });

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700;900&display=swap"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&display=swap"
          rel="stylesheet"
        ></link>
        <title>html-css</title>
        <meta name="viewport" content="width=device-width" />
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </>
  );
};

export default App;
