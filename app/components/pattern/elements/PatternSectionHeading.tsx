import BackToTopButton from '../../common/BackToTopButton';

interface PatternSectionHeadingProps {
  id: string;
  heading: string;
}

export default function PatternSectionHeading({
  id,
  heading,
}: PatternSectionHeadingProps) {
  return (
    <h2
      id={id}
      className='text-xl sm:text-2xl md:text-3xl font-semibold mt-4 mb-4 flex justify-between items-center'
    >
      <span className='flex items-center gap-2'>
        {heading}:
        <BackToTopButton />
      </span>
    </h2>
  );
}
