import Link from 'next/link';

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
      <p className='text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 mb-4'>
        Written in US Terms by {author}
      </p>
      <p className='text-sm sm:text-base md:text-lg mb-4'>
        {introText}{' '}
        <Link
          target='_blank'
          rel='noreferrer'
          className='text-blue-600 hover:text-blue-800'
          href={formLink}
        >
          this questionnaire!
        </Link>
      </p>
    </>
  );
}
