"use client";

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import React, { useEffect, useState } from 'react';

import Home from './home';

// import Header from '../components/sectionalComponents/Header';

const Transition = () => {
  gsap.registerPlugin(useGSAP);
  const [isFirstLoad, setIsFirstLoad] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const pageAnimation = () => {
    // setIsLoaded(true);

    gsap.from(".clip-top, .clip-bottom", 2, {
      delay: 1,
      height: "50vh",
      ease: "power4.inOut",
    });

    gsap.to(".marquee", 3.5, {
      delay: .75,
      top: "50%",
      ease: "power4.inOut",
    });

    gsap.from(".clip-top .marquee, .clip-bottom .marquee", 6, {
      delay: 1,
      left: "100%",
      ease: "power3.inOut",
    });

    gsap.from(".clip-center .marquee", 6, {
      delay: 1,
      left: "-50%",
      ease: "power3.inOut",
    });

    gsap.to(".clip-top", 2, {
      delay: 6,
      clipPath: "inset(0% 0 100% 0)",
      ease: "power4.inOut",
    });

    gsap.to(".clip-bottom", 2, {
      delay: 6,
      clipPath: "inset(100% 0 0% 0)",
      ease: "power4.inOut",
    });

    gsap.to(".clip-top .marquee, .clip-bottom .marquee, .clip-center .marquee span, .marquee p", 1, {
      delay: 6,
      opacity: 0,
      zIndex: -10,
      ease: "power2.inOut",
    });

    gsap.to(".clip-top .marquee, .clip-bottom .marquee, .clip-center .marquee span, .marquee p", 1, {
      delay: 6.5,
      // opacity: 0,
      zIndex: -10,
      ease: "power2.inOut",
    });

    gsap.to(".loader", 3.75, {
      delay: 7.5,
      background: "#0f0f10",
      ease: "power2.inOut",
    });

    gsap.to(".loader", 1.5, {
      delay: 8.25,
      opacity: 0,
      zIndex: -10,
      ease: "power2.inOut",
    });
  };




  useEffect(() => {
    // Check if it's the first load
    const isFirstLoad = localStorage.getItem('isFirstLoad');

    if (!isFirstLoad) {
      // Set flag to indicate the homepage has been loaded once
      localStorage.setItem('isFirstLoad', 'true');
      setIsFirstLoad(true);
    }

    if (isFirstLoad === null) {
      // Run the GSAP animation only if it’s the first load
      gsap.fromTo('.animate-on-load', { opacity: 0 }, { opacity: 1, duration: 2, zIndex: -50 });
    }
  }, [setIsFirstLoad]);


  useGSAP(() => {

    setIsLoaded(true);
    console.log("#2", isLoaded);
    pageAnimation();
    
    if (isLoaded === true) {
      isLoaded
    }
  }, [pageAnimation]);

  // isLoaded === false && setIsLoaded(true);

  console.log(isLoaded)
  
  return (
    <div className='page-transition-wrapper '>
     
      <div className=".animate-on-load">
        <div className="loader">
          <div className="loader-clip clip-top">
            <div className="marquee">
              <div className="marquee-container font-Megrim">
                <span className='text-[16vw] px-12 pr-[135px] sm:pr-8'>
                  Anomar 
                </span> 
                
                <span className='text-[16vw] px-12 pr-[135px] sm:pr-8'>
                  Anomar
                </span> 
                

                <h3 className='text-[16vw] px-12 pr-[135px] sm:pr-8'>
                  Anomar
                </h3>
                
                
                <span className='text-[16vw] px-12 pr-[135px] sm:pr-8'>
                  Anomar
                </span> 
                
                <span className='text-[16vw] px-12 pr-[135px] sm:pr-8'>
                  Anomar
                </span> 
              </div>
            </div>
          </div>
          <div className="loader-clip clip-bottom">
            <div className="marquee">
              <div className="marquee-container font-Megrim">
                <span className='text-[16vw] px-12 pr-[135px] sm:pr-8'>
                  Anomar
                </span> 
                
                <span className='text-[16vw] px-12 pr-[135px] sm:pr-8'>
                  Anomar
                </span> 
                
                
                <h3 className='text-[16vw] px-12 pr-[135px] sm:pr-8'>
                  Anomar
                </h3>
                

                <span className='text-[16vw] px-12 pr-[135px] sm:pr-8'>
                  Anomar
                </span> 
                
                <span className='text-[16vw] px-12 pr-[135px] sm:pr-8'>
                  Anomar
                </span> 
              </div>
            </div>
          </div>
          <div className="clip-center">
            <div className="marquee">
              <div className="marquee-container font-Megrim">
                <span className='text-[16vw] px-12 pr-[135px] sm:pr-8'>
                  Anomar
                </span> 
                

                <h3 className='main-header-element text-[16vw] px-12 pr-[135px] sm:pr-8'>
                  Anomar
                </h3>
                  
                  
                <span className='text-[16vw] px-12 pr-[135px] sm:pr-8'>
                  Anomar
                </span> 
                

                <span className='text-[16vw] px-12 pr-[135px] sm:pr-8'>
                  Anomar
                </span> 
                
                <span className='text-[16vw] px-12 pr-[135px] sm:pr-8'>
                  Anomar
                </span> 
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=''>
        {!isLoaded && <Home props={isLoaded} />}
      </div>
    </div>
  );
};

export default Transition;