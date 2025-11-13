import React from 'react';
import Image from 'next/image';

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <section className='flex flex-col items-center w-full mt-6'>
      <div className='relative w-full max-w-4xl aspect-[16/9]'>
        <Image
          src='/axolotl_hero.jpg'
          fill
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 80vw'
          className='object-contain'
          alt='hero image of crochet kits'
          priority
        />
      </div>
      {/* <h1 className='tracking-tight text-2xl sm:text-4xl md:text-6xl mt-8 text-center'>
        Crochet Patterns!
      </h1>
      <p className='tracking-tight text-lg font-light sm:text-base md:text-lg mt-2 text-center'>
        and eventually some kits
      </p>
      <p className='traching-tight text-xxs font-light sm:text-base md:text-md mt-2 text-center'>
        when I get around to adding them here
      </p> */}
    </section>
  );
};

export default HeroSection;
