import localFont from 'next/font/local';
import '@/styles/globals.css';
import Layout from '../_components/layout';

// Font files can be colocated inside of `pages`
// const Boska = localFont({ src: '../public/fonts/Boska.woff2' });
// const GeneralSans = localFont({ src: '../public/fonts/GeneralSans.woff2' });
const serif = localFont({
  src: '../public/fonts/Boska.woff2',
  display: 'swap',
  variable: '--font-serif',
});

const sans = localFont({
  src: '../public/fonts/GeneralSans.woff2',
  display: 'swap',
  variable: '--font-sans',
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${serif.variable} ${sans.variable} bg-lightred`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
