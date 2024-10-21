'use client';


import gsap from 'gsap';
import React from 'react';
import { useGSAP } from '@gsap/react';


const About = () => {
  gsap.registerPlugin(useGSAP);
  
  return (
    <div className='text-[#fff]'>
      hello
    </div>
  )
}

export default About;