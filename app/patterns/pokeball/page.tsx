import Link from 'next/link';
import Footer from '../../layout/footer';
import styles from '../pattern.module.css';
import { GoogleAnalytics } from '@next/third-parties/google';
import PatternLineTracker from '../../components/PatternLineTracker';
import PatternNavigation from '../../../components/PatternNavigation';
import BackToTopButton from '../../../components/BackToTopButton';
import PatternStep from '../../../components/PatternStep';
import PatternStepSection from '../../../components/PatternStepSection';

export const metadata = {
  title: 'Pokéball Crochet Pattern',
  description:
    "Free crochet pattern for a Pokéball. Perfect for crocheters who gotta catch 'em all!",
};

export default function Pokeball() {
  const patternSections = [
    { label: 'Supplies Used', anchor: 'supplies' },
    { label: 'Stitches & Techniques', anchor: 'stitches' },
    { label: 'Instructions', anchor: 'instructions' },
    { label: 'Button', anchor: 'button' },
    { label: 'Top', anchor: 'top' },
    { label: 'Bottom', anchor: 'bottom' },
    { label: 'Assembly', anchor: 'assembly' },
  ];
  return (
    <main className='flex min-h-screen flex-col items-center p-10'>
      <div className='flex flex-col md:flex-row gap-8 w-full max-w-7xl'>
        <PatternNavigation sections={patternSections} />
        <article className={styles.patternArticleContainer}>
          <h1 className={styles.patternTitle}>Pokéball</h1>
          <h2 className={styles.patternSubtitle}>Crochet Test Pattern</h2>
          <PatternLineTracker />
          <div>
            <p className={`dark:text-gray-300 ${styles.patternTermsAndAuthor}`}>
              Written in US Terms by Alyssa Dannielle
            </p>
            <p className={styles.patternText}>
              Hi and thanks for checking out my Pokéball crochet pattern!
              Currently this pattern contains written instructions only. Keep
              checking back while I continue to add to this pattern based on
              tester feedback. To leave your feedback, please fill out{' '}
              <Link
                target='_blank'
                rel='noreferrer'
                className='text-blue-600'
                href='https://docs.google.com/forms/d/e/1FAIpQLSeIeBSmj8wTg811x8V7tk9ork0neYhv20DQ7Zb5glu1KjkKqg/viewform?usp=preview'
              >
                this questionnaire!
              </Link>
            </p>
            <h2 id='supplies' className={styles.patternSectionHeading}>
              <span className='flex items-center gap-2'>
                Supplies Used:
                <BackToTopButton />
              </span>
            </h2>
            <ul className={styles.patternList}>
              <li>Medium weight acrylic yarn</li>
              <li className='ml-6'>Red - 24 grams or 46 yards</li>
              <li className='ml-6'>White - 25 grams or 50 yards</li>
              <li className='ml-6'>Black - 9 grams or 12 yards</li>
              <li>Polyfil ~30 grams</li>
              <li>5mm (H) crochet hook</li>
              <li>Crochet notions:</li>
              <li className='ml-6'>Stitch marker</li>
              <li className='ml-6'>Scissors</li>
              <li className='ml-6'>Tapestry needle (optional)</li>
            </ul>
            <h2 id='stitches' className={styles.patternSectionHeading}>
              <span className='flex items-center gap-2'>
                Stitches & Techniques Used:
                <BackToTopButton />
              </span>
            </h2>
            <ul className={styles.patternList}>
              <li>Magic ring</li>
              <li>Yark over - yo</li>
              <li>Chain - ch</li>
              <li>Slip stitch - slst</li>
              <li>Half double crochet - hdc</li>
              <li>Half double crochet increase - hdcInc (2 hdc in 1 stitch)</li>
              <li>Join (slst in first stitch of round)</li>
              <li>
                Special stitch - ss (Ch 1 w/black, yo w/main color, insert hook,
                yo & pull up main color, yo w/black, & pull through)
              </li>
            </ul>
            <h2 id='instructions' className={styles.patternSectionHeading}>
              <span className='flex items-center gap-2'>
                Instructions:
                <BackToTopButton />
              </span>
            </h2>
            <PatternStepSection id='button' heading='Button'>
              <PatternStep
                text='Using 2 strands of white, work 8 hdc in a magic ring, join'
                stitchCount='8'
              />
              <PatternStep
                text='Work 2 ss in each stitch around to end, join'
                stitchCount='16'
              />
              <PatternStep text='Invisible finish and leave a long black tail for sewing' />
              <PatternStep
                text='Thread tapestry needle with tail and embroider a circle
                    between 1st and 2nd rounds'
              />
            </PatternStepSection>

            <PatternStepSection id='top' heading='Top'>
              <PatternStep
                text='Using 2 strands of red, work 8 hdc in a magic ring'
                stitchCount='8'
              />
              <PatternStep
                text='Continuing around, work 1 hdcInc in each stitch around to end'
                stitchCount='16'
              />
              <PatternStep
                text='Repeat { 1 hdc in next stitch and 1 hdcInc in next stitch } around to end'
                stitchCount='24'
              />
              <PatternStep
                text='Work 1 hdc in next stitch, repeat { 1 hdc in next 2 stitches and 1 hdcInc in next stitch } around to end, work 1 hdc in last stitch'
                stitchCount='32'
              />
              <PatternStep
                text='Repeat { 1 hdc in next 3 stitches and 1 hdcInc in next stitch } around to end'
                stitchCount='40'
              />
              <PatternStep
                text='Work 1 hdc in each stitch around to end, join'
                stitchCount='40'
              />
              <PatternStep
                text='Work 1 ss in each stitch around to end, join'
                stitchCount='40'
              />
              <PatternStep text='Invisible finish and leave a long black tail for sewing' />
            </PatternStepSection>

            <PatternStepSection id='bottom' heading='Bottom'>
              <PatternStep
                text='Using 2 strands of white, work 8 hdc in a magic ring'
                stitchCount='8'
              />
              <PatternStep
                text='Continuing around, work 1 hdcInc in each stitch around to end'
                stitchCount='16'
              />
              <PatternStep
                text='Repeat { 1 hdc in next stitch and 1 hdcInc in next stitch } around to end'
                stitchCount='24'
              />
              <PatternStep
                text='Work 1 hdc in next stitch, repeat { 1 hdc in next 2 stitches and 1 hdcInc in next stitch } around to end, work 1 hdc in last stitch'
                stitchCount='32'
              />
              <PatternStep
                text='Repeat { 1 hdc in next 3 stitches and 1 hdcInc in next stitch } around to end'
                stitchCount='40'
              />
              <PatternStep
                text='Work 1 hdc in each stitch around to end, join'
                stitchCount='40'
              />
              <PatternStep
                text='Work 1 ss in each stitch around to end, join'
                stitchCount='40'
              />
              <PatternStep text='Invisible finish and leave a long black tail for sewing' />
            </PatternStepSection>
            <PatternStepSection id='assembly' heading='Assembly'>
              <PatternStep text='Thread tapestry needle with tail from either top or bottom of pokeball' />
              <PatternStep text='Stitch top and bottom of pokeball together leaving a small opening to fill with polyfil and any other secrets or surprises' />
              <PatternStep text='After stuffing, finish stitching pokeball closed' />
              <PatternStep text='With any tail, stitch button on to pokeball directly between top and bottom' />
              <PatternStep text='Hide all tails inside the pokeball' />
            </PatternStepSection>
          </div>
        </article>
      </div>
      <Footer />
      <GoogleAnalytics gaId='G-3PNFXR7ZY5' />
    </main>
  );
}
