'use client';

import gsap from 'gsap';
import React from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Button from '../styledComponents/Button';
import TypeWriterWrapper from '../styledComponents/TypeWriterWrapper';

import IMG from "../../../public/images/headshot/ProImgTj.png";
import SYMBOLLEFT from "../../../public/images/symbols/SymbolLeft.png";
import IMG2 from "../../../public/images/headshot/ProImgTj2.png";
import TWITTER from "../../../public/images/social_media/twitter.png";
import LINKEDIN from "../../../public/images/social_media/linkedin.png";
import FACEBOOK from "../../../public/images/social_media/facebook.png";
import INSTAGRAM from "../../../public/images/social_media/instagram.png";




const PortfolioImageRevealer = () => {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    function isInViewport (element) {
      const el = element;
      const rect = el.getBoundingClientRect();

      return (
        rect.top >= 0 && 
        rect.left >= 0 && 
        rect.bottom <= 
          (window.innerHeight || document.documentElement.clientHeight) && 
        rect.right <= 
          (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    

    const rows = document.querySelectorAll(".Portfolio-image-row");

    // rows.forEach((row) => {
    //   if (isInViewport(row)) {
    //     let img = row.querySelector(".Portfolio-image-revealer");
    //     if (row.querySelector(".Portfolio-image-right")) {
    //       gsap.to(img, {
    //         clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
    //       });
    //     } else {
    //       gsap.to(img, {
    //         clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
    //       });
    //     };
    //   };
    // });

    rows.forEach((row) => {
      if (isInViewport(row)) {
        let img = row.querySelector(".Portfolio-image-revealer");
        if (row.querySelector(".Portfolio-image-left")) {
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

    
    gsap.utils.toArray(".Portfolio-image-container.Portfolio-image-right .Portfolio-image-revealer").forEach((img) => {
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


    gsap.utils.toArray(".Portfolio-image-container-two.Portfolio-image-left-two #Portfolio-image-row-2").forEach((img) => {
      gsap.to(img, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        scrollTrigger: {
          trigger: img,
          start: "top 75%",
          end: "bottom 70%",
          scrub: true,
        },
        delay: 2,
        duration: 1.25
      });
    });


    gsap.utils.toArray(".Portfolio-image-container-two.Portfolio-image-left-two .Portfolio-image-p-tag-two").forEach((text) => {
      gsap.from(text, {
        opacity: 0,
        y: 40,
        scrollTrigger: {
          trigger: text,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });
    });


    gsap.utils.toArray(".Portfolio-image-container.Portfolio-image-right .Portfolio-image-p-tag").forEach((text) => {
      gsap.to(text, {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: text,
          start: "top bottom",
          toggleActions: "play none none reverse"
        }
      });
    });
  });


  return (
    <div className='Portfolio-image-reveal-wrapper font-inter px-[10%]'>
    {/* <div className='font-DarkerGrotesque'> */}
      <div className="Portfolio-image-reveal-container">
        <div className="Portfolio-image-row" id="Portfolio-image-row-1">
          <div className="Portfolio-image-col">
            <div className="Portfolio-image-container Portfolio-image-right">
              <Image 
                src={IMG} 
                height={150} 
                width={700} 
                alt='photography by anomar' 
                className='Portfolio-image-revealer'/>
              <div className='Portfolio-image-p-tag sm:justify-center sm:items-center sm:w-[100%]'>
                {/* test wrapping the entire p tag */}
                <div className='flex flex-col w-full h-full'>
                  <h2 className='text-3xl italic font-extralight uppercase'>Hello,</h2>
                  {/* <div className='flex flex-row w-full h-[10vh]'> */}
                    <p className='flex flex-col '>
                      <span>My Name Is <span className='italic underline underline-offset-4'>TeeJ</span>  And I Work As A </span>
                      <span className='italic font-extralight'>
                        <TypeWriterWrapper words={['Photographer', 'Designer', 'Producer', 'Content Creator']} />
                      </span>
                    </p>
                  {/* </div> */}
                </div>
                {/* wrapper end */}
              </div>
            </div>
            {/* possibly insert here for offset images on the edge */}
          </div>
          
          <div className="Portfolio-image-col"></div>
          
        </div>

        <div className="Portfolio-image-row-two" id="Portfolio-image-row-2">
          <div className="Portfolio-image-col"></div>
          <div className="Portfolio-image-col-two">
            <div className="Portfolio-image-container-two Portfolio-image-left-two">
              {/* <div className='w-[80vw] h-[275px] flex  justify-center items-center relative'> */}
                <div className='w-[80vw] h-[400px] flex justify-end items-end flex-col relative pr-2'>
                  <div className='Portfolio-button w-[11vw] pb-[5px] flex justify-end items-end'>
                    <Button>Hire me</Button>
                  </div>
                  <div className='h-[1px] w-full border-b border-slate-200 mb-[25px]'></div>
                  <div>
                    <h3 className="text-slate-200 text-4xl">
                      [aes·thet·ic]
                    </h3>
                  </div>
                </div>
              {/* </div> */}

      
            
              {/* <div className="Portfolio-image-container Portfolio-image-left"> */}
              <div className='relative h-[275px] w-[5vw] pt-[2px] overflow-hidden flex flex-col gap-[2rem] items-start justify-end sm:justify-center sm:items-start sm:w-[100%]'>
                <div className='Portfolio-image-p-tag-two'>
                  <div className='relative h-[3.5vh] w-[4vw] pt-[2px] overflow-hidden flex flex-col gap-[2rem] items-start sm:justify-center sm:items-start sm:w-[100%]'>
                    <div className='h-[8vh] w-[1.5vw] sm:w-[4.5vw]'>
                      <Image src={LINKEDIN} alt="" className="h-full w-full flex justify-start items-start ease-in duration-500 transition-all delay-150 hover:translate-y-[-48px] text-[#a7a7a7] hover:text-inherit"/>
                    </div>
                  </div>
                  <div className='relative h-[3.5vh] w-[4vw] pt-[2px] overflow-hidden flex flex-col gap-[2rem] items-start sm:justify-center sm:items-start sm:w-[100%]'>
                    <div className='h-[8vh] w-[1.5vw] sm:w-[4.5vw]'>
                      <Image src={TWITTER} alt="" className="h-full w-full flex justify-start items-start ease-in duration-500 transition-all delay-150 hover:translate-y-[-48px] text-[#a7a7a7] hover:text-inherit"/>
                    </div>
                  </div>
                  <div className='relative h-[3.5vh] w-[4vw] pt-[2px] overflow-hidden flex flex-col gap-[2rem] items-start sm:justify-center sm:items-start sm:w-[100%]'>
                    <div className='h-[8vh] w-[1.5vw] sm:w-[4.5vw]'>
                      <Image src={FACEBOOK} alt="" className="h-full w-full flex justify-start items-start ease-in duration-500 transition-all delay-150 hover:translate-y-[-48px] text-[#a7a7a7] hover:text-inherit"/>
                    </div>
                  </div>
                  <div className='relative h-[3.5vh] w-[4vw] pt-[2px] overflow-hidden flex flex-col gap-[2rem] items-start sm:justify-center sm:items-start sm:w-[100%]'>
                    <div className='h-[8vh] w-[1.5vw] sm:w-[4.5vw]'>
                      <Image src={INSTAGRAM} alt="" className="h-full w-full flex justify-start items-start ease-in duration-500 transition-all delay-150 hover:translate-y-[-48px] text-[#a7a7a7] hover:text-inherit"/>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className='flex h-full w-full bottom-[]'>
              
              </div> */}

              {/* <div className='relative h-[3.5vh] w-[11vw] pt-[2px] overflow-hidden flex flex-col gap-[2rem] items-start sm:justify-center sm:items-start sm:w-[100%]'>
                <div className='h-[8vh] w-[1.5vw] sm:w-[4.5vw]'>
                  <Image src={LINKEDIN} alt="" className="h-full w-full flex justify-start items-start ease-in duration-500 transition-all delay-150 hover:translate-y-[-48px] text-[#a7a7a7] hover:text-inherit"/>
                </div>
                <div className='h-[8vh] w-[1.5vw] sm:w-[4.5vw]'>
                  <Image src={TWITTER} alt="" className="h-full w-full flex justify-start items-start ease-in duration-500 transition-all delay-150 hover:translate-y-[-48px] text-[#a7a7a7] hover:text-inherit"/>
                </div>
                <div className='h-[8vh] w-[1.5vw] sm:w-[4.5vw]'>
                  <Image src={FACEBOOK} alt="" className="h-full w-full flex justify-start items-start ease-in duration-500 transition-all delay-150 hover:translate-y-[-48px] text-[#a7a7a7] hover:text-inherit"/>
                </div>
                <div className='h-[8vh] w-[1.5vw] sm:w-[4.5vw]'>
                  <Image src={INSTAGRAM} alt="" className="h-full w-full flex justify-start items-start ease-in duration-500 transition-all delay-150 hover:translate-y-[-48px] text-[#a7a7a7] hover:text-inherit"/>
                </div>
              </div> */}
              {/* <p className='Portfolio-image-p-tag'>Light Beyond Bars</p> */}
            </div>
          </div>
        </div>
      </div>
      <div className="Portfolio-image-whitespace-img-revealer"></div>
    </div>
  );
};

export default PortfolioImageRevealer;