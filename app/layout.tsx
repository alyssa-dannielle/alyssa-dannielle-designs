import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './layout/header';
import { GoogleAnalytics } from '@next/third-parties/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Alyssa Dannielle's Designs",
  description: 'Browse and test free crochet patterns!',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`dark:bg-gray-900 dark:text-white ${inter.className}`}>
        <Header />
        <main className='container'>{children}</main>
      </body>
      <GoogleAnalytics gaId='G-3PNFXR7ZY5' />
    </html>
  );
}
