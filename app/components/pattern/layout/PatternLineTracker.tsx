'use client';

import { useEffect, useState, useCallback, useRef } from 'react';
import type {
  MouseEvent as ReactMouseEvent,
  TouchEvent as ReactTouchEvent,
} from 'react';
import styles from './PatternLineTracker.module.css';

const PatternLineTracker = () => {
  const [position, setPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [showHelp, setShowHelp] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const savedPosition = localStorage.getItem('patternLinePosition');
    const hasUsedBefore = localStorage.getItem('patternLineUsed');
    if (savedPosition) {
      setPosition(parseInt(savedPosition));
    }
    if (hasUsedBefore) {
      setShowHelp(false);
    }
  }, []);

  const handleStart = (e: ReactMouseEvent | ReactTouchEvent) => {
    e.preventDefault();
    if (containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const clientY =
        'touches' in e ? e.touches[0].clientY : (e as ReactMouseEvent).clientY;
      const relativePosition = clientY - containerRect.top;

      setPosition(relativePosition);
      localStorage.setItem('patternLinePosition', relativePosition.toString());
    }
    setIsDragging(true);
    setShowHelp(false);
    localStorage.setItem('patternLineUsed', 'true');
    document.body.style.userSelect = 'none';
  };

  const handleMove = useCallback(
    (e: MouseEvent | TouchEvent) => {
      if (isDragging && containerRef.current) {
        e.preventDefault();
        const containerRect = containerRef.current.getBoundingClientRect();
        const clientY =
          'touches' in e ? e.touches[0].clientY : (e as MouseEvent).clientY;
        const relativePosition = clientY - containerRect.top;

        setPosition(relativePosition);
        localStorage.setItem(
          'patternLinePosition',
          relativePosition.toString()
        );
      }
    },
    [isDragging]
  );

  const handleEnd = () => {
    setIsDragging(false);
    document.body.style.userSelect = '';
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMove);
      window.addEventListener('mouseup', handleEnd);
      window.addEventListener('touchmove', handleMove, { passive: false });
      window.addEventListener('touchend', handleEnd);
    }

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseup', handleEnd);
      window.removeEventListener('touchmove', handleMove);
      window.removeEventListener('touchend', handleEnd);
    };
  }, [isDragging, handleMove]);

  return (
    <div ref={containerRef} className={styles.patternContainer}>
      <div
        className={`${styles.lineTracker} ${showHelp ? styles.showHelp : ''}`}
        style={{ top: position }}
        onMouseDown={handleStart as (e: ReactMouseEvent) => void}
        onTouchStart={handleStart as (e: ReactTouchEvent) => void}
      >
        {showHelp && (
          <span className={styles.helpText}>
            Drag this bar to keep track of your progress!
          </span>
        )}
      </div>
      {/* Your pattern content goes here */}
    </div>
  );
};

export default PatternLineTracker;
