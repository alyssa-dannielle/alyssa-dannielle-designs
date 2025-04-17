import React from 'react';

export default function Footer() {
  return (
    <footer className='mt-8 border-t pt-4 text-sm text-gray-600 text-center dark:text-gray-400'>
      <p>
        © {new Date().getFullYear()} alyssadannielle.design - All rights
        reserved.
      </p>
      <p className='mt-2'>
        For personal use only. Do not redistribute, sell, or share patterns or
        content from this site.
      </p>
    </footer>
  );
}
