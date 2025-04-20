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
      // Show header immediately when scrolling starts
      setIsVisible(true);

      // Clear any existing timeout
      clearTimeout(timeoutId);

      // Set a timeout to hide the header after scrolling stops
      timeoutId = setTimeout(() => {
        setIsVisible(false);
      }, 2000); // Hide after 2 seconds of no scrolling
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

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
