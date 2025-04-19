import Link from 'next/link';
import styles from '../patterns/pattern.module.css';

interface PatternIntroductionProps {
  author: string;
  formLink: string;
  introText: string;
}

export default function PatternIntroduction({
  author,
  formLink,
  introText,
}: PatternIntroductionProps) {
  return (
    <>
      <p className={`dark:text-gray-300 ${styles.patternTermsAndAuthor}`}>
        Written in US Terms by {author}
      </p>
      <p className={styles.patternText}>
        {introText}{' '}
        <Link
          target='_blank'
          rel='noreferrer'
          className='text-blue-600'
          href={formLink}
        >
          this questionnaire!
        </Link>
      </p>
    </>
  );
}
