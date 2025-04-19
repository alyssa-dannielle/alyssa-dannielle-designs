import { ReactNode } from 'react';
import { GoogleAnalytics } from '@next/third-parties/google';
import Footer from '../../app/layout/footer';
import styles from '../app/patterns/pattern.module.css';
import PatternNavigation from './PatternNavigation';
import PatternLineTracker from './PatternLineTracker';

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
  return (
    <>
      <main className='flex min-h-screen flex-col items-center p-10'>
        <div className='flex flex-col md:flex-row gap-8 w-full max-w-7xl'>
          <PatternNavigation sections={sections} />
          <article className={styles.patternArticleContainer}>
            <h1 className={styles.patternTitle}>{title}</h1>
            <h2 className={styles.patternSubtitle}>Crochet Test Pattern</h2>
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
