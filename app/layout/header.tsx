'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ContactForm } from 'components/common';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMoon,
  faSun,
  faBars,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const PATTERNS = [
  { name: 'Drink Koozie', href: '/patterns/koozie' },
  { name: 'Pokéball', href: '/patterns/pokéball' },
  { name: 'Axolotl', href: '/patterns/axolotl' },
];

type Props = {};

const Header = (props: Props) => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
    } else {
      const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)',
      ).matches;
      setDarkMode(prefersDark);
      localStorage.setItem('theme', prefersDark ? 'dark' : 'light');
    }

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme')) {
        setDarkMode(e.matches);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  // Add click outside handler
  useEffect(() => {
    const closeMenu = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.patterns-menu')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', closeMenu);
    return () => document.removeEventListener('click', closeMenu);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
  };

  return (
    <div className='border-b flex items-center justify-between'>
      {/* Left side with home link and Instagram */}
      <div className='p-5 flex items-center gap-4'>
        <Link href='/'>AlyssaDannielle.Design</Link>
        <button className='group'>
          <Link
            href='https://www.instagram.com/alyssadannielle.design'
            target='_blank'
            rel='noreferrer'
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className='
                transition-colors duration-200
                hover:text-[#E4405F] active:text-[#E4405F]
                md:group-hover:text-[#E4405F]
              '
            />
          </Link>
        </button>
        <button className='group' onClick={() => setIsContactFormOpen(true)}>
          <FontAwesomeIcon
            icon={faEnvelope}
            className='
              transition-colors duration-200
              hover:text-blue-500 active:text-blue-500
              md:group-hover:text-blue-500
            '
          />
        </button>
      </div>

      {/* Center/Right side with menu and dark mode */}
      <div className='flex items-center gap-4 p-5'>
        {/* Patterns Menu */}
        <div className='relative patterns-menu'>
          {/* Mobile Menu Button */}
          <button
            className='md:hidden'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label='Toggle patterns menu'
          >
            <FontAwesomeIcon
              icon={faBars}
              className='w-3.5 h-3.5 sm:w-5 sm:h-5'
            />
          </button>

          {/* Desktop Menu Button */}
          <button
            className='hidden md:flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span>Patterns</span>
            <FontAwesomeIcon icon={faChevronDown} className='w-3 h-3' />
          </button>

          {/* Dropdown Menu */}
          {isMenuOpen && (
            <div className='absolute right-0 mt-2 w-48 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-xl border dark:border-gray-700 z-50'>
              {PATTERNS.map((pattern) => (
                <Link
                  key={pattern.href}
                  href={pattern.href}
                  className='block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700'
                  onClick={() => setIsMenuOpen(false)}
                >
                  {pattern.name}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Dark Mode Toggle */}
        <button onClick={toggleDarkMode}>
          <FontAwesomeIcon
            icon={darkMode ? faSun : faMoon}
            className='w-3.5 h-3.5 sm:w-5 sm:h-5'
          />
        </button>
      </div>
      <ContactForm
        isOpen={isContactFormOpen}
        onClose={() => setIsContactFormOpen(false)}
      />
    </div>
  );
};

export default Header;
