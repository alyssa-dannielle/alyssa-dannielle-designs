interface PatternStepProps {
  text: string;
  stitchCount?: string;
}

export default function PatternStep({ text, stitchCount }: PatternStepProps) {
  return (
    <li>
      <div className='flex flex-col sm:flex-row justify-between items-center'>
        <span className='flex-1'>{text}</span>
        {stitchCount && (
          <span className='dark:text-gray-400 text-gray-600 italic self-end sm:ml-4'>
            ... {stitchCount} stitches
          </span>
        )}
      </div>
    </li>
  );
}
