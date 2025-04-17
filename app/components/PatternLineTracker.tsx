"use client";

import { useEffect, useState, useCallback } from "react";
import styles from "./PatternLineTracker.module.css";

const PatternLineTracker = () => {
  const [position, setPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    // Load saved position from localStorage
    const savedPosition = localStorage.getItem("patternLinePosition");
    if (savedPosition) {
      setPosition(parseInt(savedPosition));
    }
  }, []);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (isDragging) {
        const newPosition = e.clientY;
        setPosition(newPosition);
        localStorage.setItem("patternLinePosition", newPosition.toString());
      }
    },
    [isDragging]
  );

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, handleMouseMove]);

  return (
    <div
      className={styles.lineTracker}
      style={{ top: position }}
      onMouseDown={handleMouseDown}
    />
  );
};

export default PatternLineTracker;
