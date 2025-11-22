import Link from 'next/link';

interface ButtonProps {
  link: string;
  children: React.ReactNode;
}

export default function Button({ link, children }: ButtonProps) {
  return (
    <Link href={link}>
      <button className='w-48 px-6 py-3 rounded-lg bg-cyan-800 text-white font-medium transform transition duration-200 ease-in-out hover:bg-yellow-500 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-800 focus:ring-offset-2'>
        {children}
      </button>
    </Link>
  );
}
