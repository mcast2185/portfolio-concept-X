"use client";

import React, { HTMLAttributes, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import dynamic from 'next/dynamic';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Image from 'next/image';

import ImageRevealer from '@/components/sectionalComponents/ImageRevealer';
import ImgScrollAnimation from '@/components/sectionalComponents/ImgScrollAnimation';
import PortfolioImageRevealer from '../components/sectionalComponents/PortfolioImageRevealer';


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
          <h1 className='sa-h1'>
            Hero Text
          </h1>
        </section>
        <section className="info ">
          <div className="header-rows">
            <div className="header-row">
              <h1 className="sa-h1">Motion</h1>
            </div>
            <div className="header-row">
              <h1 className="sa-h1">Stills</h1>
            </div>
          </div>
          {/* <ImageRevealer/> */}
          <PortfolioImageRevealer/>
        </section>
        <section className='header-content '>
          <p className="sa-p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, eos iste!
            Maxime sunt deleniti placeat beatae provident consectetur quos at maiores debitis!
          </p>
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
            <h1 className="sa-h1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, eos iste!
              Maxime sunt deleniti placeat beatae provident consectetur quos at maiores debitis!
            </h1>
          </section>
          <section className="whitespace-2"></section> 
        </div> 
      </div>
    </div>
  );
};

export default Home;