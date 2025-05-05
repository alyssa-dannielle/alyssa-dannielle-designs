'use client';

import { ReactNode, useEffect, useState } from 'react';
import { GoogleAnalytics } from '@next/third-parties/google';
import Footer from '../../../layout/footer';
import PatternNavigation from './PatternNavigation';
import PatternLineTracker from '../elements/PatternLineTracker';
import SocialShare from '../../common/SocialShare';

interface PatternLayoutProps {
  title: string;
  sections: Array<{ label: string; anchor: string }>;
  children: ReactNode;
}

export default function PatternLayout({
  title,
  sections,
  children,
}: PatternLayoutProps) {
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  return (
    <>
      <main className='flex min-h-screen flex-col items-center p-10'>
        <div className='flex flex-col md:flex-row gap-8 w-full max-w-7xl'>
          <PatternNavigation sections={sections} />
          <article className='max-w-4xl w-full'>
            <h1 className='text-2xl sm:text-4xl md:text-6xl font-bold mb-2'>
              {title}
            </h1>
            <h2 className='text-xl sm:text-2xl md:text-3xl font-semibold mb-6'>
              Crochet Test Pattern
            </h2>
            <SocialShare
              title={`${title} - Free Crochet Pattern`}
              url={currentUrl}
            />
            <PatternLineTracker />
            <div>{children}</div>
          </article>
        </div>
        <Footer />
        <GoogleAnalytics gaId='G-3PNFXR7ZY5' />
      </main>
    </>
  );
}
