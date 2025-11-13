import Link from 'next/link';
import HeroSection from './home/HeroSection';
import Footer from './layout/footer';
import { Button } from './components/common';
import FlipCard from './components/common/FlipCard';

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className='flex flex-col gap-4 mt-8 mb-8'>
        <div className='flex flex-col items-center gap-4 w-full mt-8 mb-8'>
          <h2 className='tracking-tight text-2xl sm:text-4xl md:text-6xl text-center'>
            Crochet Patterns
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 place-items-center mt-8'>
            <Button link='/patterns/koozie'> Drink Koozie</Button>
            <Button link='/patterns/pokeball'>Pokéball</Button>
            <Button link='/patterns/axolotl'>Axolotl</Button>
          </div>
        </div>
        <div className='flex flex-col items-center gap-4 w-full mt-8 mb-8'>
          <h2 className='text-2xl sm:text-4xl md:text-6xl'>Crochet Kits</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 place-items-center mt-8'>
            <FlipCard
              frontImage='/koozie_kit.jpg'
              backImage='/koozie-kit-materials.jpg'
              altText='Drink Koozie Kit'
              cropClass='object-cover object-center scale-150'
            />
            <FlipCard
              frontImage='/pokeball_kit.jpg'
              backImage='/pokeball_kit_materials.jpg'
              altText='Pokeball Kit'
              cropClass='object-cover object-center scale-125'
            />
            <FlipCard
              frontImage='/axolotl_kit.jpg'
              backImage='/axolotl_kit_materials.jpg'
              altText='Axolotl Kit'
              cropClass='object-cover object-center scale-125'
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
