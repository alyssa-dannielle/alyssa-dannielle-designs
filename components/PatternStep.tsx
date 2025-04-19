interface PatternStepProps {
  text: string;
  stitchCount?: string;
}

export default function PatternStep({ text, stitchCount }: PatternStepProps) {
  return (
    <li>
      <div className='flex items-center justify-between gap-4 py-1'>
        <span className='flex-1'>{text}</span>
        {stitchCount && (
          <span className='dark:text-gray-400 text-sm whitespace-nowrap'>
            ... {stitchCount} stitches
          </span>
        )}
      </div>
    </li>
  );
}
