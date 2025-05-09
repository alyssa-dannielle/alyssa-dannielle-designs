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
  { name: 'Pokéball', href: '/patterns/pokeball' },
  { name: 'Axolotl', href: '/patterns/axolotl' },
];

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const pageHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      // First update the last scroll position
      setLastScrollY(currentScrollY);

      // Always show header in these cases:
      // 1. At the top of the page (currentScrollY < 100)
      // 2. On short pages (pageHeight < 200)
      // 3. At the bottom of the page (currentScrollY >= pageHeight)
      if (
        currentScrollY < 100 ||
        pageHeight < 200 ||
        currentScrollY >= pageHeight
      ) {
        setIsVisible(true);
        clearTimeout(timeoutId); // Clear any pending hide timeout
        return;
      }

      // Compare current scroll position with previous
      const isScrollingUp = currentScrollY < lastScrollY;

      // Show header when scrolling up
      if (isScrollingUp) {
        setIsVisible(true);
        clearTimeout(timeoutId); // Clear any pending hide timeout
      }

      // Only set hide timeout when scrolling down
      if (!isScrollingUp) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          setIsVisible(false);
        }, 2000);
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, [lastScrollY]); // Add lastScrollY to dependencies

  return (
    <div
      className={`fixed top-0 left-0 right-0 border-b flex items-center justify-between bg-white dark:bg-gray-900 transition-transform duration-300 z-50 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
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
