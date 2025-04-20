'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
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
      className={`fixed top-0 left-0 right-0 border-b flex justify-between bg-white dark:bg-gray-900 transition-transform duration-300 z-50 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className='p-5'>
        <Link href='/'>AlyssaDannielle.Design</Link>
      </div>
      <span className='p-5'>
        <button onClick={toggleDarkMode}>
          <FontAwesomeIcon
            icon={darkMode ? faSun : faMoon}
            className='w-3.5 h-3.5 sm:w-5 sm:h-5'
          />
        </button>
      </span>
    </div>
  );
};

export default Header;
