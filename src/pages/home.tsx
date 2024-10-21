"use client";

import Link from 'next/link';
import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import Image from 'next/image';

import ImageRevealer from '@/components/sectionalComponents/ImageRevealer';
import ImgScrollAnimation from '@/components/animationComponents/ImgScrollAnimation';
import PortfolioImageRevealer from '../components/sectionalComponents/PortfolioImageRevealer';

import DISCOVER from "../../public/images/discover.svg";
import styles from "../styles/homecard.module.scss";
import Button from '@/components/styledComponents/Button';

const DynamicBackGround = dynamic(() => import("../components/animationComponents/SpaceBackground"), {
  loading: () => <></>


});

const Home = ({props}: any) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="w-screen bg-transparent relative">
      <DynamicBackGround/>
      <div className='z-10 '>
        <div className='top-border-animation w-screen h-[20vh] bg-black z-0 translate-y-[-20vh] fixed top-0'></div>
        <section className="hero">
          <h1 className='uppercase font-normal tracking-[-4px] text-[200px]'>
            ANOMAR
          </h1>
        </section>
        <section className="info font-inter">
          <div className="header-rows">
            <div className="header-row flex flex-row">
              <h1 id="h-1" className="sa-h1 font-[700]">inspired</h1>
              <h3 id="h-3" className="sa-h1 font-Megrim italic">design</h3>
            </div>
            <div className="header-row flex flex-row">
              <h3 id="h-4" className="sa-h1 font-inter font-[700] tracking-[.25rem] uppercase">design</h3>
              <h1 id="h-2" className="sa-h1 font-Megrim italic -skew-x-12 font-[300]">perspective</h1>
            </div>
          </div>
          <PortfolioImageRevealer/>
        </section>
        <section className='header-content '>
          <div className='w-[80vw] flex flex-row relative mx-[5%] pr-2'>
            <div className=' flex items-end flex-col'>

              <p className="sa-p italic ml-[-5%] z-[150]">
                On a constant search to leave an artistic imprint on
                the world by introducing a unique perspective on art & design.  
              </p>
              <div className='h-[1px] w-full border-b flex items-start border-slate-200 absolute px-[10%] bottom-0 '></div>
            </div>
          </div>
        </section>

        <ImgScrollAnimation/>

        <section className="whitespace bg-gradient-to-b from-black to-transparent"></section>
        <section className="pinned">
          <div className="revealer">
            <div className="revealer-1"></div>
            <div className="revealer-2"></div>
          </div>
          <div className="animation-reveal-1">
            <div className="animation-revealer-1"></div>
            <div className="animation-revealer-2"></div>
          </div>
          <div className="animation-reveal-2">

            {/* this section should probably be its own component to stablize the scaling */}
            <div className="animation-revealer-1">
              <div className='animation-revealer-1-content'>
                <h1 className='animation-revealer-1-header text-black text-[180px]'>
                  <p className='reveal-text-header text-black'>D</p>
                  <p className='reveal-text-header text-black'>E</p>
                  <p className='reveal-text-header text-black'>S</p>
                  <p className='reveal-text-header text-black'>I</p>
                  <p className='reveal-text-header text-black'>G</p>
                  <p className='reveal-text-header text-black'>N</p>
                </h1>
                <div className='animation-revealer-1-side-text'>
                  <p className='reveal-text text-[62px] pl-4 text-black'>A</p>
                  <p className='reveal-text text-[62px] pr-4 text-black'>N</p>
                  <p className='reveal-text text-[62px] pl-4 text-black'>O</p>
                  <p className='reveal-text text-[62px] pr-4 text-black'>M</p>
                  <p className='reveal-text text-[62px] pl-4 text-black'>A</p>
                  <p className='reveal-text text-[62px] pr-4 text-black'>R</p>
                </div>
              </div>
            </div>
            {/*  */}

          </div>
        </section>
        <div className=''>
          <section className='header-content-2 px-[4.6em]'>
            <div  id="about" className="relative min-h-screen w-[100vw] h-[150vh]  sm:mb-0 sm:px-[10vw] pr-[20vw] px-[10vw]">
              {/* <div className='relative mt-[10vh] sm:mb-0 h-[110vh] w-full bg-[#FAFDFD] mx-auto flex flex-col justify-evenly sm:pt-8'> */}
              <div className='relative mt-[10vh] sm:mt-2 mb-4 sm:mb-0 h-[150vh] sm:h-[75%] w-[70vw] bg-[#fff] mx-auto flex flex-col justify-evenly sm:pt-8'>
                <div className=' w-full lg:mx-auto sm:px-0 sm:mb-[4vh] flex flex-col  leading-[9rem] sm:scale-[.95]'>
                  {/* <div className='h-[25vh] w-full px-[3.5rem] sm:px-0 mb-[8vh] sm:mb-[4vh] flex flex-col leading-[9rem] sm:scale-[.95]'> */}
                  <div className='sm:h-[5vh] h-[25vh] sm:leading-[1] mt-[5vh] cursor-default flex flex-col justify-start items-center lg:w-[100%] lg:tracking-[.19rem] lg:leading-[9rem]'>
                    <p className="font-PoiretOne text-[12.5px] tracking-widest font-bold">ANOMAR</p>
                    <div style={{ position: 'relative', flexDirection: 'column' }}>

                      {/* gsap wrapper */}
                      <div className=' relative flex flex-row h-full w-full tracking-[1.55] pr-[25px] sm:pr-0'>
                        <h1 className=' font-Imbue sm:text-[1.85rem] md:text-[5rem] text-[2.75rem] font-[500] italic'>
                          AESTHETIC
                        </h1>
                        <div>
                          <span className="flex flex-row h-full  px-4 text-[2.2rem] decoration-slate-200 tracking-[1] hover:scale-[1.1]
                        decoration-2 underline-offset-[6px] font-PinyonScript font-thin sm:text-[1.2rem] md:text-[1.8rem] text-[--yellow]">
                            {" "}Driven{" "}
                          </span>
                        </div>
                        <h1 className=' font-Imbue text-[2.75rem] sm:text-[1.85rem] md:text-[2rem] font-[500] italic'>
                          RESULTS
                        </h1>
                      </div>
                      {/* gsap wrapper */}

                    </div>
                  </div>
                </div>
                <div className='relative w-full h-[70%] py-[5vh] sm:py-0 sm:my-0 flex flex-col'>
                  <div className='w-full h-[60%] flex flex-row sm:flex-col sm:mx-2 sm:px-auto sm:justify-center pt-2'>

                    <div className="flex flex-col w-[49.5%] h-full sm:hidden sm:h-0 sm:w-0 justify-start">

                      <div className='cursor-default pl-[10rem] sm:px-auto pr-[2rem] sm:w-full sm:py-1 flex sm:px-auto'>

                        <p className="font-PoiretOne text-[12.5px] tracking-wide font-medium text-gray-500 w-full">
                          Images carefully photographed in real-time and crafted into artful depictions of light varying through <span className='font-bold text-slate-800'> thoughtful perspective.</span>
                        </p>
                      </div>
                      <div className='h-full w-full flex sm:hidden sm:h-0 sm:w-0 mb-4 scale-75 justify-center'>
                        
                        <div>
                          <div className='w-full font-PoiretOne text-[12.5px] tracking-widest font-bold'>
                            <div className={styles.homeAboutWorkshop}>
                              <Image alt="" src={DISCOVER} className="transform will-change-transform hover:scale-[.95] ease-out duration-[750ms] py-[20px]" />
                              <span className={styles.homeAboutWorkshopLeft}>VISION</span>
                              <span className={styles.homeAboutWorkshopRight}>VISION</span>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>


                    <div className='bg-[#6b7280] h-full pt-[25%] w-[1px] sm:hidden sm:h-0 sm:w-0 '>

                    </div>

                    <div className=' w-[49.5%]'>


                      <div className='cursor-default px-4 sm:px-0 sm:w-full sm:py-1 flex sm:px-auto flex-col justify-start sm:justify-center sm:items-center'>
                        <p className="font-PoiretOne text-[12.5px] tracking-wide font-medium text-gray-500 w-[80%]">
                          We are a design company focused on <span className="underline decoration-[--yellow]">providing</span> your
                          business a unique, artistic allure. The art is inspired by the explored manipulation of light,
                          capturing its fluidity on a sleek metallic canvas.
                        </p>
                        <p className="font-PoiretOne text-[12.5px] tracking-wide font-medium text-gray-500 w-[80%] pt-[20px]">
                          It is through a formless display of light and color that these collective images establish a wondrous presence in the space they occupy.
                        </p>
                        <p className="font-PoiretOne text-[12.5px] tracking-wide font-medium text-gray-500 w-[80%] pt-[20px] h-full mt-[20%] sm:mt-5">
                          Each item is proudly created to ignite a sense of wonder, similar to our<span className='font-bold text-slate-800'> journey through imagination.</span>
                        </p>
                      </div>

                      {/* ul flex column */}
                    </div>

                  </div>
                  <div className='w-full flex justify-center'>
                    {/* <button type="button" className='w-[210px] h-[50px] flex justify-center items-center font-PoiretOne text-[12.5px] tracking-widest font-bold bg-[#5d1da1] text-slate-200'>
                      <Link href="/gallery" aria-details='gallery'>Explore</Link>
                    </button> */}
                    <Button text="Explore" border="#000" color="#000">Hire Me!</Button>
                  </div>
                  {/* <div>
                    <div className='w-full font-PoiretOne text-[12.5px] tracking-widest font-bold'>
                      <div className={styles.homeAboutWorkshop}>
                        <Image alt="" src={DISCOVER} className="transform will-change-transform hover:scale-[.95] ease-out duration-[750ms] py-[20px]" />
                        <span className={styles.homeAboutWorkshopLeft}>Artistic</span>
                        <span className={styles.homeAboutWorkshopRight}>Perspective</span>
                      </div>

                    </div>
                  </div> */}


                </div>
                {/* <div className='py-[5vh] sm:pt-0 w-full sm:pb-1 '>
                  <div className='flex flex-row items-center justify-end '>
                    <h1 className="text-[2.5rem] sm:text-xl cursor-default font-PoiretOne text-[--yellow] sm:px-2">
                      Design
                    </h1>
                    <div className='w-[9rem] sm:w-20 h-[3px] sm:h-[2px] bg-[--yellow] mt-[.5rem] ml-[2rem] sm:ml-0 sm:mr-0 sm:p-0' />
                  </div>
                </div> */}
              </div>
            </div>
            {/* <h1 className="sa-h1">

              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, eos iste!
              Maxime sunt deleniti placeat beatae provident consectetur quos at maiores debitis!
            </h1> */}
            {/* <ImageRevealer/> */}
          </section>
          {/* <section className="whitespace-2"></section>  */}
        </div> 
      </div>
    </div>
  );
};

export default Home;