"use client";

import { ArrowUpIcon } from "@heroicons/react/24/outline";

export default function BackToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className="inline-flex items-center text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
      aria-label="Back to top"
    >
      <ArrowUpIcon className="w-5 h-5" />
    </button>
  );
}