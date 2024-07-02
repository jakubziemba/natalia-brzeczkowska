import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta property="og:title" content="Nati Makeupik" key="title" />
        <meta
          property="og:description"
          content="A Warsaw-based make up artist, working since 2019 in many industry sectors including TV, theatre, fashion and film."
        />
        <meta property="og:url" content="https://natimakeupik.com" />
        <meta property="og:image" content="/og-image.png" />
        <meta name="twitter:title" content="Nati Makeupik" key="title" />
        <meta
          name="twitter:description"
          content="A Warsaw-based make up artist, working since 2019 in many industry sectors including TV, theatre, fashion and film."
        />
        <meta name="twitter:image" content="/twitter-image.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
