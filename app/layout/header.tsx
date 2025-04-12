"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-regular-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

type Props = {};

const Header = (props: Props) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setDarkMode(savedTheme === "dark");
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("theme", newDarkMode ? "dark" : "light");
  };

  return (
    <div className="bg-white text-black dark:bg-gray-900 dark:text-white">
      <div className="border-b flex justify-between">
        <div className="p-5">
          <Link href="/">AlyssaDannielle.Design</Link>
        </div>
        <span className="p-5">
          <button onClick={toggleDarkMode}>
            <FontAwesomeIcon
              icon={darkMode ? faSun : faMoon}
              className="w-3.5 h-3.5 sm:w-5 sm:h-5"
            />
          </button>
        </span>
      </div>
    </div>
  );
};

export default Header;
