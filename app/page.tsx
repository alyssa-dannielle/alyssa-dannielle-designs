import Link from 'next/link';
import HeroSection from './home/HeroSection';
import Footer from './layout/footer';
import { Button } from './components/common';

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className='flex flex-col gap-4 mt-8 mb-8'>
        <div className='flex flex-col items-center gap-4 w-full mt-8 mb-8'>
          <h2 className='tracking-tight text-2xl sm:text-4xl md:text-6xl mt-8 text-center'>
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
          <p>Drink Koozie</p>
          <p>Pokeball</p>
          <p>Axolotl</p>
        </div>
      </div>
      <Footer />
    </>
  );
}
