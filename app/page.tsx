import Link from 'next/link';
import HeroSection from './home/HeroSection';
import Footer from './layout/footer';
import { Button } from './components/common';

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className='flex flex-col items-center gap-4 w-full mt-8 mb-8'>
        <Button link='/patterns/koozie'> Drink Koozie Pattern</Button>
        <Button link='/patterns/pokéball'>Pokéball Pattern</Button>
        <Button link='/patterns/axolotl'>Axolotl Pattern</Button>
      </div>
      <Footer />
    </>
  );
}
