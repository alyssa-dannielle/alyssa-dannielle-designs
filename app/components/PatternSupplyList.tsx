import BackToTopButton from './BackToTopButton';

interface PatternSupplyListProps {
  supplies: Array<{ text: string; indent?: boolean }>;
}

export default function PatternSupplyList({
  supplies,
}: PatternSupplyListProps) {
  return (
    <>
      <h2
        id='supplies'
        className='text-xl sm:text-2xl md:text-3xl font-semibold mt-4 mb-4 flex justify-between items-center'
      >
        <span className='flex items-center gap-2'>
          Supplies Needed:
          <BackToTopButton />
        </span>
      </h2>
      <ul className='list-disc space-y-2 text-sm sm:text-base md:text-lg ml-6'>
        {supplies.map((supply, index) => (
          <li key={index} className={supply.indent ? 'ml-6' : ''}>
            {supply.text}
          </li>
        ))}
      </ul>
    </>
  );
}
