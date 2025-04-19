import styles from '../patterns/pattern.module.css';
import BackToTopButton from './BackToTopButton';

interface PatternSupplyListProps {
  supplies: Array<{ text: string; indent?: boolean }>;
}

export default function PatternSupplyList({
  supplies,
}: PatternSupplyListProps) {
  return (
    <>
      <h2 id='supplies' className={styles.patternSectionHeading}>
        <span className='flex items-center gap-2'>
          Supplies Needed:
          <BackToTopButton />
        </span>
      </h2>
      <ul className={styles.patternList}>
        {supplies.map((supply, index) => (
          <li key={index} className={supply.indent ? 'ml-6' : ''}>
            {supply.text}
          </li>
        ))}
      </ul>
    </>
  );
}
