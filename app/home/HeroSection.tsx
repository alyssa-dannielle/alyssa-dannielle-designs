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
      <h1 className='tracking-tight text-2xl sm:text-4xl md:text-6xl mt-8 text-center'>
        Crochet Pattern Testing
      </h1>
      <p className='tracking-tight text-sm font-light sm:text-base md:text-lg mt-2 text-center'>
        bc that&apos;s what we&apos;re doing rn
      </p>
    </section>
  );
};

export default HeroSection;
