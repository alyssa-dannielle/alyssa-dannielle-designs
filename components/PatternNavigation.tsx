"use client";

import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

interface NavItem {
  label: string;
  anchor: string;
}

interface PatternNavigationProps {
  sections: NavItem[];
}

export default function PatternNavigation({
  sections,
}: PatternNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (anchor: string) => {
    const element = document.getElementById(anchor);
    if (element) {
      // Get the header height - adjust this value based on your layout
      const headerOffset = 300;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsOpen(false); // Close dropdown after selection on mobile
  };

  return (
    <div className="w-full md:w-auto">
      {/* Mobile Dropdown */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md"
        >
          <span className="text-lg font-semibold">Pattern Sections</span>
          {isOpen ? (
            <ChevronUpIcon className="w-5 h-5" />
          ) : (
            <ChevronDownIcon className="w-5 h-5" />
          )}
        </button>
        {isOpen && (
          <ul className="mt-2 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md space-y-2">
            {sections.map((section) => (
              <li key={section.anchor}>
                <button
                  onClick={() => scrollToSection(section.anchor)}
                  className="text-left w-full px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  {section.label}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Desktop Sidebar */}
      <nav className="hidden md:block p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md w-full md:sticky md:top-4 md:max-w-xs md:max-h-[calc(100vh-2rem)] md:overflow-y-auto">
        <h2 className="text-lg font-semibold mb-3">Pattern Sections</h2>
        <ul className="space-y-2">
          {sections.map((section) => (
            <li key={section.anchor}>
              <button
                onClick={() => scrollToSection(section.anchor)}
                className="text-left w-full px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {section.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
