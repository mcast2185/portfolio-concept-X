"use client";

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import React, { useEffect, useState } from 'react';


// import Header from '../components/sectionalComponents/Header';

const Transition = () => {
  gsap.registerPlugin(useGSAP);
  const [isFirstLoad, setIsFirstLoad] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const {contextSafe} = useGSAP(() => {});

  const DynamicElement = () => {
    contextSafe(()=> {
      gsap.from(".split-text", {
        clipPath: "inset(0 0 50% 0)",
        ease: "power3.in",
        transform: "translateY(0%)",
        opacity: 1,
        duration: 1.5
      });

      gsap.to(".split-text", {
        clipPath: "inset(0 0 52% 0)",
        ease: "power4.inOut",
        transform: "translateX(100vw) translateY(0%)",
        delay: 1.5,
        opacity: 0,
        transitionProperty: "transform, opacity",
        transitionDelay: 1.5,
        transitionDuration: 3
      });

      gsap.from(".split-text-two", {
        clipPath: "inset(50% 0 0 0)",
        ease: "power3.in",
        transform: "translateY(0%)",
        opacity: 1,
        duration: 1.5
      });

      gsap.to(".split-text-two", {
        clipPath: "inset(52% 0 0 0)",
        ease: "power4.inOut",
        transform: "translateX(-100vw) translateY(0%)",
        delay: 1.5,
        opacity: 0,
        transitionProperty: "transform, opacity",
        transitionDelay: 1.5,
        transitionDuration: 3
      });
    });

    console.log(contextSafe)

    // return (
    //   <div className='split-text-wrapper relative w-full h-full flex justify-center items-center'>
    //     <h1 className='absolute will-change-transform split-text text-[16vw] h-[62px] text-blue-600 overflow-hidden'>
    //       Anomar
    //     </h1>
    //     <h1 className='absolute will-change-transform split-text-two text-[16vw] h-[62px] text-red-600 overflow-hidden'>
    //       Anomar
    //     </h1>

    //   </div>
    // );
  };


  useEffect(() => {
    console.log("useEffect fired first", contextSafe);
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
  }, []);


  useGSAP(() => {
    console.log("useGSAP fired first", contextSafe);
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
      callbackScope: ()=> setIsLoaded(true),
      delay: 6.5,
      // opacity: 0,
      zIndex: -10,
      ease: "power2.inOut",
    });

    gsap.to(".header-element", 1, {
      delay: 6.5,
      opacity: 0,
      zIndex: -10,
      ease: "power2.inOut",
    });

  })

  return (
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
              
              {isLoaded === false && (
                <h3 className='header-element text-[16vw] px-12 pr-[135px] sm:pr-8'>
                  Anomar
                </h3>
                )} : {( 
                <div className='split-text-wrapper relative w-full h-full flex justify-center items-center'>
                  <h1 className='absolute will-change-transform split-text text-[16vw] h-[62px] text-blue-600 overflow-hidden'>
                    Anomar
                  </h1>
                  <h1 className='absolute will-change-transform split-text-two text-[16vw] h-[62px] text-red-600 overflow-hidden'>
                    Anomar
                  </h1>
                </div>
              )}
 
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
      {/* <Header/> */}
      
    </div>
  );
};

export default Transition;