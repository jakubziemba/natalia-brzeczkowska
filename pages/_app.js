import localFont from "next/font/local";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
const serif = localFont({
  src: "../public/fonts/Boska.woff2",
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
    <div className={`${serif.variable} ${sans.variable} bg-lightred`}>
      <AnimatePresence mode="wait">
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
    </div>
  );
}
