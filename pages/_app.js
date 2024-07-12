import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";

// ZODIAK & PUBLIC SANS?
const serif = localFont({
  src: "../public/fonts/Boska.woff2",
  display: "swap",
  variable: "--font-serif",
});

const sans = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

// const sans = localFont({
//   src: "../public/fonts/GeneralSans.woff2",
//   display: "swap",
//   variable: "--font-sans",
// });

export default function App({ Component, pageProps, router }) {
  return (
    <div className={`${serif.variable} ${sans.className}`}>
      <AnimatePresence mode="wait">
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
    </div>
  );
}
