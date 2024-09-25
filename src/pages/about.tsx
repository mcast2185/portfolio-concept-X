'use client';


import gsap from 'gsap';
import React from 'react';
import { useGSAP } from '@gsap/react';


const About = () => {
  gsap.registerPlugin(useGSAP);
  
  return (
    <div>
      <div className='bg-black w-screen h-[250vh]'>
        <div className='spacer h-[100vh] w-full' />

        <div className='spacer h-[10vh] py-24 w-full' />
      </div>
    </div>
  )
}

export default About;