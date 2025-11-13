'use client';
import { useState } from 'react';

interface FlipCardProps {
  frontImage: string;
  backImage: string;
  altText: string;
  cropClass?: string;
}

export default function FlipCard({
  frontImage,
  backImage,
  altText,
  cropClass = 'object-cover',
}: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      onClick={toggleFlip}
      className='w-64 h-64 cursor-pointer perspective'
      style={{
        perspective: '1000px',
      }}
    >
      <div
        className='relative w-full h-full transition-transform duration-500 rounded-full'
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
        onMouseEnter={() => window.innerWidth >= 768 && setIsFlipped(true)}
        onMouseLeave={() => window.innerWidth >= 768 && setIsFlipped(false)}
      >
        {/* Front */}
        <div
          className='absolute w-full h-full rounded-full overflow-hidden'
          style={{ backfaceVisibility: 'hidden' }}
        >
          <img
            src={frontImage}
            alt={altText}
            className={`w-full h-full ${cropClass}`}
          />
        </div>

        {/* Back */}
        <div
          className='absolute w-full h-full rounded-full overflow-hidden'
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <img
            src={backImage}
            alt={`${altText} - Materials`}
            className={`w-full h-full ${cropClass}`}
          />
        </div>
      </div>
    </div>
  );
}
