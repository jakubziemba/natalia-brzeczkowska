import './globals.css';
import type { Metadata } from 'next';

import localFont from 'next/font/local';

// Font files can be colocated inside of `app`
const serif = localFont({
  src: './Boska.woff2',
  display: 'swap',
  variable: '--font-serif',
});

const sans = localFont({
  src: './GeneralSans.woff2',
  display: 'swap',
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Natalia Brzęczkowska | Makeup Artist',
  description: 'Natalia specializes in makeup for music videos, commercials and photo sessions.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={`${serif.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
