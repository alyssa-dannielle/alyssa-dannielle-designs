import BackToTopButton from './BackToTopButton';

interface PatternTechniquesListProps {
  techniques: string[];
}

export default function PatternTechniquesList({
  techniques,
}: PatternTechniquesListProps) {
  return (
    <>
      <h2
        id='stitches'
        className='text-xl sm:text-2xl md:text-3xl font-semibold mt-4 mb-4 flex justify-between items-center'
      >
        <span className='flex items-center gap-2'>
          Stitches & Techniques Used:
          <BackToTopButton />
        </span>
      </h2>
      <ul className='list-disc space-y-2 text-sm sm:text-base md:text-lg ml-6'>
        {techniques.map((technique, index) => (
          <li key={index}>{technique}</li>
        ))}
      </ul>
    </>
  );
}
