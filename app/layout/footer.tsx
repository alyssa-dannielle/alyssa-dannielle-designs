import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='mt-8 border-t pt-4 text-sm text-gray-600 text-center dark:text-gray-400'>
      <p className='tracking-tight'>
        © {new Date().getFullYear()}{' '}
        <Link href={'/'}>alyssadannielle.design</Link> - All rights reserved.
      </p>
      <p className='mt-2 tracking-tight'>
        Graphs and 3D models were made using{' '}
        <Link
          href='https://www.crochetparade.org/'
          target='_blank'
          rel='noopener noreferrer'
        >
          crochetPARADE.org
        </Link>
      </p>
      <p className='mt-2 tracking-tight'>
        For personal use only. Do not redistribute, sell, or share patterns or
        content from this site.
      </p>
    </footer>
  );
}
