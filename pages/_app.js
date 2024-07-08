import localFont from "next/font/local";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";

// ZODIAK & PUBLIC SANS?
const serif = localFont({
  src: "../public/fonts/FrankRuhlLibre.woff2",
  display: "swap",
  variable: "--font-serif",
});

const sans = localFont({
  src: "../public/fonts/GeneralSans.woff2",
  display: "swap",
  variable: "--font-sans",
});

export default function App({ Component, pageProps, router }) {
  return (
    <div className={`${serif.variable} ${sans.variable}`}>
      <AnimatePresence mode="wait">
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
    </div>
  );
}
