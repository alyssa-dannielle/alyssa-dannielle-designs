"use client";

import { useEffect, useState, useCallback } from "react";
import styles from "./PatternLineTracker.module.css";

const PatternLineTracker = () => {
  const [position, setPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const savedPosition = localStorage.getItem("patternLinePosition");
    if (savedPosition) {
      setPosition(parseInt(savedPosition));
    }
  }, []);

  const handleStart = (e: MouseEvent | TouchEvent) => {
    e.preventDefault();
    setIsDragging(true);
    // Prevent text selection while dragging
    document.body.style.userSelect = 'none';
  };

  const handleMove = useCallback(
    (e: MouseEvent | TouchEvent) => {
      if (isDragging) {
        e.preventDefault();
        const newPosition = 'touches' in e 
          ? e.touches[0].clientY 
          : (e as MouseEvent).clientY;
        setPosition(newPosition);
        localStorage.setItem("patternLinePosition", newPosition.toString());
      }
    },
    [isDragging]
  );

  const handleEnd = () => {
    setIsDragging(false);
    // Re-enable text selection
    document.body.style.userSelect = '';
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMove);
      window.addEventListener("mouseup", handleEnd);
      window.addEventListener("touchmove", handleMove, { passive: false });
      window.addEventListener("touchend", handleEnd);
    }

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", handleEnd);
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("touchend", handleEnd);
    };
  }, [isDragging, handleMove]);

  return (
    <div
      className={styles.lineTracker}
      style={{ top: position }}
      onMouseDown={handleStart}
      onTouchStart={handleStart}
    />
  );
};

export default PatternLineTracker;
