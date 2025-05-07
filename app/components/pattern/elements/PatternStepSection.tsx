import BackToTopButton from '../../common/BackToTopButton';

interface PatternStepSectionProps {
  id: string;
  heading: string;
  children: React.ReactNode;
}

export default function PatternStepSection({
  id,
  heading,
  children,
}: PatternStepSectionProps) {
  return (
    <>
      <h3
        id={id}
        className='text-lg sm:text-xl md:text-2xl font-medium mt-3 mb-3'
      >
        <span className='flex items-center gap-2'>
          {heading}:
          <BackToTopButton />
        </span>
      </h3>
      <ol className='list-decimal space-y-4 text-sm sm:text-base md:text-lg ml-6'>
        {children}
      </ol>
    </>
  );
}
