import { Html, Head, Main, NextScript } from "next/document";
import BackgroundGradient from "@/_components/background-gradient";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="A Warsaw-based make up artist, working since 2019 in many industry sectors including TV, theatre, fashion and film."
        />
        <meta
          property="description"
          content="A Warsaw-based make up artist, working since 2019 in many industry sectors including TV, theatre, fashion and film."
        />
        <meta property="og:site_name" content="Nati Makeupik"></meta>
        <meta property="og:title" content="Nati Makeupik" key="title" />
        <meta
          property="og:description"
          content="A Warsaw-based make up artist, working since 2019 in many industry sectors including TV, theatre, fashion and film."
        />
        <meta property="og:url" content="https://natimakeupik.com" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta
          property="og:image"
          content="https://natimakeupik.com/og-image.png"
        />
        <meta property="og:image:alt" content="Nati Makeupik" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="672" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="natimakeupik.com" />
        <meta property="twitter:url" content="https://natimakeupik.com" />
        <meta name="twitter:title" content="Nati Makeupik" key="title" />
        <meta
          name="twitter:description"
          content="A Warsaw-based make up artist, working since 2019 in many industry sectors including TV, theatre, fashion and film."
        />
        <meta
          name="twitter:image"
          content="https://natimakeupik.com/twitter-image.png"
        />
        <meta name="twitter:image:alt" content="Nati Makeupik" />
        <meta name="twitter:image:width" content="1200" />
        <meta name="twitter:image:height" content="672" />
      </Head>
      <body className="antialiased">
        <BackgroundGradient />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
