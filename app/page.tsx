import Link from 'next/link';
import HeroSection from './home/HeroSection';
import Footer from './layout/footer';

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className='flex justify-center w-full mt-8'>
        <Link href='/patterns/drink-koozie'>
          <button className='px-6 py-3 rounded-lg bg-teal-700 text-white font-medium transform transition duration-200 ease-in-out hover:bg-teal-800 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2'>
            View Drink Koozie Pattern
          </button>
        </Link>
      </div>
      <Footer />
    </>
  );
}
