import Link from 'next/link';

interface ButtonProps {
  link: string;
  children: React.ReactNode;
}

export default function Button({ link, children }: ButtonProps) {
  return (
    <Link href={link}>
      <button className='px-6 py-3 rounded-lg bg-teal-600 text-white font-medium transform transition duration-200 ease-in-out hover:bg-teal-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2'>
        {children}
      </button>
    </Link>
  );
}
