"use client";

import React, { useEffect, useState } from 'react';

interface PageTrackerProps {
  sections: string[];
}

const PageTracker: React.FC<PageTrackerProps> = ({ sections }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sectionHeight = window.innerHeight;
      const index = Math.floor(scrollY / sectionHeight);
      setCurrentIndex(index);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-4 left-4">
      <span className="text-[#d0b20b]">
        {sections[currentIndex]} - {String(currentIndex + 1).padStart(2, '0')}
      </span>
    </div>
  );
};

export default PageTracker;
