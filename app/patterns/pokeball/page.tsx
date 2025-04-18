import Link from 'next/link';
import Footer from '../../layout/footer';
import styles from '../pattern.module.css';
import { GoogleAnalytics } from '@next/third-parties/google';
import PatternLineTracker from '../../components/PatternLineTracker';
import PatternNavigation from '../../../components/PatternNavigation';
import BackToTopButton from '../../../components/BackToTopButton';

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
            <h3 id='button' className={styles.patternSubsectionHeading}>
              <span className='flex items-center gap-2'>
                Button:
                <BackToTopButton />
              </span>
            </h3>
            <ol className={styles.patternStepSet}>
              <li>
                <div className={styles.patternStep}>
                  <span className='flex-1'>
                    Using 2 strands of white, work 8 hdc in a magic ring, join
                  </span>
                  <span
                    className={`dark:text-gray-400 ${`dark:text-gray-400 ${styles.patternStitchCount}`}`}
                  >
                    ... 8 stitches
                  </span>
                </div>
              </li>
              <li>
                <div className={styles.patternStep}>
                  <span className='flex-1'>
                    Work 2 ss in each stitch around to end, join
                  </span>
                  <span
                    className={`dark:text-gray-400 ${`dark:text-gray-400 ${styles.patternStitchCount}`}`}
                  >
                    ... 16 stitches
                  </span>
                </div>
              </li>
              <li>
                <div className={styles.patternStep}>
                  <span className='flex-1'>
                    Invisible finish and leave a long black tail for sewing
                  </span>
                </div>
              </li>
              <li>
                <div className={styles.patternStep}>
                  <span className='flex-1'>
                    Thread tapestry needle with tail and embroider a circle
                    between 1st and 2nd rounds
                  </span>
                </div>
              </li>
            </ol>
            <h3 id='top' className={styles.patternSubsectionHeading}>
              <span className='flex items-center gap-2'>
                Top:
                <BackToTopButton />
              </span>
            </h3>
            <ol className={styles.patternStepSet}>
              <li>
                <div className={styles.patternStep}>
                  <span className='flex-1'>
                    Using 2 strands of red, work 8 hdc in a magic ring
                  </span>
                  <span
                    className={`dark:text-gray-400 ${styles.patternStitchCount}`}
                  >
                    ... 8 stitches
                  </span>
                </div>
              </li>
              <li>
                <div className={styles.patternStep}>
                  <span className='flex-1'>
                    Continuing around, work 1 hdcInc in each stitch around to
                    end
                  </span>
                  <span
                    className={`dark:text-gray-400 ${styles.patternStitchCount}`}
                  >
                    ... 16 stitches
                  </span>
                </div>
              </li>
              <li>
                <div className={styles.patternStep}>
                  <span className='flex-1'>
                    Repeat {'{'} 1 hdc in next stitch and 1 hdcInc in next
                    stitch {'}'} around to end
                  </span>
                  <span
                    className={`dark:text-gray-400 ${styles.patternStitchCount}`}
                  >
                    ... 24 stitches
                  </span>
                </div>
              </li>
            </ol>
            <h3 id='body' className={styles.patternSubsectionHeading}>
              <span className='flex items-center gap-2'>
                Body:
                <BackToTopButton />
              </span>
            </h3>
            <ol className={styles.patternStepSet}>
              <li>
                <div className={styles.patternStep}>
                  <span className='flex-1'>
                    Continuing around, work 1 hdc in each stitch around
                  </span>
                  <span
                    className={`dark:text-gray-400 ${styles.patternStitchCount}`}
                  >
                    ... 24 stitches
                  </span>
                </div>
              </li>
              <li>
                <div className={styles.patternStep}>
                  <span className='flex-1'>
                    Continuing around, repeat the previous round to desired
                    height
                  </span>
                  <span
                    className={`dark:text-gray-400 ${styles.patternStitchCount}`}
                  >
                    ... 24 stitches
                  </span>
                </div>
              </li>
              <li>
                <div className={styles.patternStep}>
                  <span className='flex-1'>
                    (optional) If your final row ends in the middle of the
                    koozie and/or if you’d like a less abrupt finish, work
                    single crochets to one side of koozie before finishing off
                  </span>
                </div>
              </li>
              <li>
                <div className={styles.patternStep}>
                  <span className='flex-1'>
                    Finish off (optional invisible finish) and weave in the
                    tails.
                  </span>
                </div>
              </li>
            </ol>
          </div>
        </article>
      </div>
      <Footer />
      <GoogleAnalytics gaId='G-3PNFXR7ZY5' />
    </main>
  );
}
