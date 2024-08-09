"use client";

import gsap from 'gsap';
import React from 'react';

interface NavButtonsProps {
  sections: string[];
}

const NavButtons: React.FC<NavButtonsProps> = ({ sections }) => {
  const handleScroll = (index: number) => {
    const section = document.getElementById(`section-${index}`);
    if (section) {
      gsap.to(window, { scrollTo: { y: section, offsetY: 0 }, duration: 1.2 });
    }
  };

  return (
    <div className="fixed top-1/2 right-4 transform -translate-y-1/2">
      {sections.map((section, index) => (
        <button
          key={index}
          className="block mb-4 text-[#d0b20b]"
          onClick={() => handleScroll(index)}
        >
          {section}
        </button>
      ))}
    </div>
  );
};

export default NavButtons;
