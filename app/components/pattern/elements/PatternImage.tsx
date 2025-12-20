import Image from 'next/image';

interface PatternImageProps {
  src: string;
  alt: string;
  width?: number;
  isCircular?: boolean;
  priority?: boolean;
}

export function PatternImage({
  src,
  alt,
  width = 280,
  isCircular = false,
}: PatternImageProps) {
  return (
    <div className='my-8 flex justify-center'>
      <div className={`relative aspect-square w-[${width}px] overflow-hidden`}>
        <Image
          src={src}
          alt={alt}
          fill
          className={`
            object-cover shadow-lg hover:scale-105 transition-transform duration-300
            ${isCircular ? 'rounded-full border-4 border-white/10' : 'rounded-2xl'}
          `}
          loading='lazy'
          sizes={`(max-width: 768px) 100vw, ${width}px`}
        />
      </div>
    </div>
  );
}
