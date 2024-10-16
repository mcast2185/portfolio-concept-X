'use client';

import gsap from 'gsap';
import React from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import VERTICAL1 from "../../../public/images/photography/eleven.jpg";
import HORIZONTAL1 from "../../../public/images/photography/nine.jpg";
import HORIZONTAL2 from "../../../public/images/photography/five.jpg";
import VERTICAL2 from "../../../public/images/photography/seventeen.jpg";


const ImageRevealer = () => {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    function isInViewport (element) {
      const el = element;
      const rect = el.getBoundingClientRect();

      // console.log("view",el, rect)
      return (
        rect.top >= 0 && 
        rect.left >= 0 && 
        rect.bottom <= 
          (window.innerHeight || document.documentElement.clientHeight) && 
        rect.right <= 
          (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    

    const rows = document.querySelectorAll(".row");

    rows.forEach((row) => {
      if (isInViewport(row)) {
        let img = row.querySelector(".img-revealer");
        if (row.querySelector(".left")) {
          gsap.to(img, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
          });
        } else {
          gsap.to(img, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
          });
        };
      };
    });

    

    gsap.utils.toArray(".img-container.right .img-revealer").forEach((img) => {
      gsap.to(img, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        scrollTrigger: {
          trigger: img,
          start: "top 75%",
          end: "bottom 70%",
          scrub: true
        }
      });
    });

    gsap.utils.toArray(".img-container.left .img-revealer").forEach((img) => {
      gsap.to(img, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        scrollTrigger: {
          trigger: img,
          start: "top 75%",
          end: "bottom 70%",
          scrub: true
        }
      });
    });

    gsap.utils.toArray(".img-container.left .p-tag").forEach((text) => {
      gsap.from(text, {
        opacity: 0.25,
        y: 20,
        scrollTrigger: {
          trigger: text,
          start: "top 90%",
          toggleActions: "play none none reverse"
        }
      });
    });

    gsap.utils.toArray(".img-container.right .p-tag").forEach((text) => {
      gsap.from(text, {
        opacity: 0.25,
        y: 20,
        scrollTrigger: {
          trigger: text,
          start: "top 90%",
          toggleActions: "play none none reverse"
        }
      });
    });

  });

  return (
    <div>
      <div className="image-reveal-container">
        <div className="row" id="row-1">
          <div className="col">
            <div className="img-container right">
              <Image src={VERTICAL1} height={650} width={300} alt='photography by anomar' className='img-revealer'/>

              <p className='p-tag'>Ease Under The Sky</p>
            </div>
          </div>
          <div className="col"></div>
        </div>
        <div className="row" id="row-2">
          <div className="col"></div>
          <div className="col">
            <div className="img-container left">
              <Image src={HORIZONTAL1} height={250} width={220} alt='photography by anomar' className='img-revealer'/>

              <p className='p-tag'>Light Beyond Bars</p>
            </div>
          </div>
        </div>
        <div className="row" id="row-3">
          <div className="col">
            <div className="img-container right">
              <Image src={VERTICAL2} height={650} width={300} alt='photography by anomar' className='img-revealer'/>

              <p className='p-tag'>Directing Lights</p>
            </div>
          </div>
          <div className="col"></div>
        </div>
        <div className="row" id="row-4">
          <div className="col"></div>
          <div className="col">
            <div className="img-container left">
              <Image src={HORIZONTAL2} height={250} width={300} alt='photography by anomar' className='img-revealer'/>

              <p className='p-tag'>Inner-City Walls</p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="whitespace-img-revealer"></div> */}
    </div>
  );
};

export default ImageRevealer;