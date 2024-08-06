"use client";

import gsap from 'gsap';
import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

interface ScrollComponentProps {
  children: React.ReactNode;
}

const ScrollComponent: React.FC<ScrollComponentProps> = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  useEffect(() => {
    // gsap.fromTo(
    //   '.section',
    //   { opacity: 0, y: 100 },
    //   { opacity: 1, y: 0, duration: 1, stagger: 0.2 }
    // );
  }, []);

  return <div>{children}</div>;
};

export default ScrollComponent;
