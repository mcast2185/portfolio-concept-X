"use client";

import React from 'react';
import Image from 'next/image';


import IMG3 from "../../../public/images/photography/twenty.jpg"
import IMG1 from "../../../public/images/photography/seven.jpg"
import IMG2 from "../../../public/images/photography/three.jpg"
import IMG4 from "../../../public/images/photography/twenty-one.jpg"
import IMG5 from "../../../public/images/photography/six.jpg"
import IMG6 from "../../../public/images/photography/eight.jpg"



const ImgScrollAnimation = () => {

  return (

      <section className="header-images scroll-smooth">
        <div className="sa-img-wrapper">
          <Image src={IMG1} alt="" className="sa-image" priority />
        </div>
        <div className="sa-img-wrapper">
          <Image src={IMG2} alt="" className="sa-image" priority />
        </div>
        <div className="sa-img-wrapper">
          <Image src={IMG3} alt="" className="sa-image" priority />
        </div>
        <div className="sa-img-wrapper">
          <Image src={IMG4} alt="" className="sa-image" priority />
        </div>
        <div className="sa-img-wrapper">
          <Image src={IMG5} alt="" className="sa-image" priority />
        </div>
        <div className="sa-img-wrapper">
          <Image src={IMG6} alt="" className="sa-image" priority />
        </div>
      </section>

  );
};

export default ImgScrollAnimation;