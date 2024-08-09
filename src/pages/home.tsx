"use client";

import React, { HTMLAttributes } from 'react';
import Transition from '../transition';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


const Home = ({props}: any) => {
  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
   console.log(props)
  });

  return (
    <div className="h-screen w-screen bg-red-400">
        <h1 className=' will-change-transform text-[16vw] mix-blend-difference text-white '>
          Home
        </h1>
  
       

    </div>
  )
};

// export default Transition(Home);
export default Home;