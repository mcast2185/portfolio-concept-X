import React from 'react';
import Image from 'next/image';


import IMG1 from "../../../public/images/photography/seven.jpg"
import IMG2 from "../../../public/images/photography/three.jpg"
import IMG3 from "../../../public/images/photography/twenty.jpg"
import IMG4 from "../../../public/images/photography/twenty-one.jpg"

const ScrollAnimation = () => {
  return (
    <div>
      <section className="hero">
        <h1 className='sa-h1'>
          Hero Text
        </h1>
      </section>
      <section className="info">
        <div className="header-rows">
          <div className="header-row">
            <h1 className="sa-h1">Motion</h1>
          </div>
          <div className="header-row">
            <h1 className="sa-h1">Stills</h1>
          </div>
        </div>
      </section>
      <section className="header-image">
        <div className="sa-img-wrapper">
          <Image src="" alt="" className="sa-image"/>
        </div>
        <div className="sa-img-wrapper">
          <Image src="" alt="" className="sa-image"/>
        </div>
        <div className="sa-img-wrapper">
          <Image src="" alt="" className="sa-image"/>
        </div>
        <div className="sa-img-wrapper">
          <Image src="" alt="" className="sa-image"/>
        </div>
      </section>
      <section className="whitespace"></section>
      <section className="pinned">
        <div className="revealer">
          <div className="revealer-1"></div>
          <div className="revealer-2"></div>
        </div>
      </section>
      <section className='website-content'>
        <h1 className="sa-h1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, eos iste! 
          Maxime sunt deleniti placeat beatae provident consectetur quos at maiores debitis!
        </h1>
      </section>
    </div>
  );
};

export default ScrollAnimation;