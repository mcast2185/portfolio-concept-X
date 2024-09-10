"use client";

import gsap from 'gsap';
import React from 'react';
import Image  from 'next/image';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


import IMG5 from "../../../public/images/photography/six.jpg";
import IMG1 from "../../../public/images/photography/seven.jpg";
import IMG2 from "../../../public/images/photography/three.jpg";
import IMG6 from "../../../public/images/photography/eight.jpg";
import IMG3 from "../../../public/images/photography/twenty.jpg";
import IMG4 from "../../../public/images/photography/twenty-one.jpg";


const ParallaxImgAnimation = () => {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const workInfo = document.querySelectorAll(".parallax-work-photo-item");

    workInfo.forEach((item, index) => {
      item.className.concat(` z-[${workInfo.length - index}] `)
    });

    gsap.set('.parallax-work-photo-item', {
      clipPath: () => "inset(0px 0px 0px 0px)"
    });

    const animation = gsap.to(".parallax-work-photo-item:not(:last-child)", {
      clipPath: () => "inset(0px 0px 0px 0px)",
      stagger: .5,
      ease: "none"
    });

    ScrollTrigger.create({
      trigger: ".parallax-work",
      start: "top top",
      end: "bottom bottom",
      animation: animation,
      scrub: 1
    })

  })

  return (
    <div className='parallax-wrapper'>
      <div className="parallax-spacer">
        <section className='parallax-work'>

          <div className='parallax-work-left'>
            <div className='parallax-work-text'>
              
              <div className='parallax-work-info'>
                <div className='parallax-work-left-b1'>
                  <span className='parallax-work-num'></span>
                  <h2 className='parallax-title'>
                    image animated <span className='parallax-stroke'>on gsap</span>
                  </h2>
                  <a href='#' className='parallax-work-link'>view more</a>
                </div>
              </div>
              
              <div className='parallax-work-info'>
                <div className='parallax-work-left-b1'>
                  <span className='parallax-work-num'></span>
                  <h2 className='parallax-title'>
                    image animated <span className='parallax-stroke'>on gsap</span>
                  </h2>
                  <a href='#' className='parallax-work-link'>view more</a>
                </div>
              </div>
              
              <div className='parallax-work-info '>
                <div className='parallax-work-left-b1'>
                  <span className='parallax-work-num'></span>
                  <h2 className='parallax-title'>
                    image animated <span className='parallax-stroke'>on gsap</span>
                  </h2>
                  <a href='#' className='parallax-work-link'>view more</a>
                </div>
              </div>
              
              <div className='parallax-work-info'>
                <div className='parallax-work-left-b1'>
                  <span className='parallax-work-num'></span>
                  <h2 className='parallax-title'>
                    image animated <span className='parallax-stroke'>on gsap</span>
                  </h2>
                  <a href='#' className='parallax-work-link'>view more</a>
                </div>
              </div>


            </div>
          </div>

          <div className='parallax-work-right'>
            <div className='parallax-work-right-b1'>
              <div className='parallax-work-photo'>
                <div className="parallax-work-photo-item" title='1'>
                  <Image src={IMG1} alt='' className='.parallax-img'/>
                </div>
                <div className="parallax-work-photo-item" title='2'>
                  <Image src={IMG2} alt='' className='.parallax-img'/>
                </div>
                <div className="parallax-work-photo-item" title='3'>
                  <Image src={IMG3} alt='' className='.parallax-img'/>
                </div>
                <div className="parallax-work-photo-item" title='4'>
                  <Image src={IMG4} alt='' className='.parallax-img'/>
                </div>
              </div>
            </div>
          </div>

        </section>
        <div className='parallax-spacer'></div>
      </div>
    </div>
  );
};

export default ParallaxImgAnimation