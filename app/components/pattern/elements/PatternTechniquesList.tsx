import BackToTopButton from '../../common/BackToTopButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

interface TechniqueItem {
  text: string;
  videoUrl?: string;
}

type Technique = string | TechniqueItem;

interface PatternTechniquesListProps {
  techniques: Technique[];
}

// Change to default export
export default function PatternTechniquesList({
  techniques,
}: PatternTechniquesListProps) {
  return (
    <div className='my-8'>
      <h2 className='text-xl font-semibold mb-4'>
        <span className='flex items-center gap-2'>
          Stitches & Techniques Used:
          <BackToTopButton />
        </span>
      </h2>
      <ul className='list-disc list-inside space-y-2'>
        {techniques.map((technique, index) => (
          <li key={index}>
            {typeof technique === 'string' ? (
              technique
            ) : (
              <span>
                {technique.text}{' '}
                {technique.videoUrl && (
                  <a
                    href={technique.videoUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-block align-middle text-red-600 hover:text-red-700 transition-colors'
                  >
                    <FontAwesomeIcon icon={faYoutube} className='w-4 h-4' />
                  </a>
                )}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
