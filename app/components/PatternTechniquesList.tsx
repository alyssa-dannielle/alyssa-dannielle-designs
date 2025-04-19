import styles from '../patterns/pattern.module.css';
import BackToTopButton from './BackToTopButton';

interface PatternTechniquesListProps {
  techniques: string[];
}

export default function PatternTechniquesList({
  techniques,
}: PatternTechniquesListProps) {
  return (
    <>
      <h2 id='stitches' className={styles.patternSectionHeading}>
        <span className='flex items-center gap-2'>
          Stitches & Techniques Used:
          <BackToTopButton />
        </span>
      </h2>
      <ul className={styles.patternList}>
        {techniques.map((technique, index) => (
          <li key={index}>{technique}</li>
        ))}
      </ul>
    </>
  );
}
