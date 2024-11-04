"use client";

import gsap from 'gsap';
import React from 'react';
import { Provider } from 'react-redux';
import { SessionProvider, SessionProviderProps } from 'next-auth/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Home from '@/pages/home';
import { store } from '../store';
import About from '@/pages/about';
import Contact from '@/pages/contact';
import Gallery from '@/pages/gallery';
import Transition from '@/pages/transition';
import Header from '../../components/sectionalComponents/Header';
import NavButtons from '../../components/styledComponents/NavButtons';
import PageTracker from '../../components/animationComponents/PageTracker';
import ScrollComponent from '../../components/animationComponents/ScrollComponent';
import { useGSAP } from '@gsap/react';
import Menu from '@/components/sectionalComponents/Menu';



export default function Index({session}: SessionProviderProps) {
  const SECTIONS = ['Home', 'Gallery', 'About', 'Contact'];
  const pageComponents = [ <Home/>,  <Gallery/>,  <About/>,  <Contact/>]

useGSAP(()=> {

  ScrollTrigger.create({
    trigger: ".Portfolio-image-p-tag-two",
    start: "top top",
    end: "50% top",
    onUpdate: (self) => {
      const progress = self.progress;
      const opacity = 4.5 * progress;
      gsap.to(".header-container", {
        opacity: -opacity + 1,
      });
    },
  });

  ScrollTrigger.create({
    trigger: ".imageScrollAnimation-container",
    start: "top top",
    end: "top top",
    onUpdate: (self) => {
      const progress = self.progress;
      gsap.to(".header-container", {
        z: -progress + 20,
      });
    },
  });
});


  return (
    <main className="overflow-x-hidden" aria-details='ANOMAR homepage'>
      <div className='App'>
        <SessionProvider session={session}>

          <Provider store={store}>
               
            <Transition/>
            <Header />
            <Menu/>
            <ScrollComponent>
              {/* {pageComponents.map((page, index) => (
                <div
                key={index}
                id={`section-${index}`}
                className="section min-h-screen flex items-center justify-center">
                  <NavButtons sections={SECTIONS}/>
                  <PageTracker sections={SECTIONS}/>
                  {page}
                </div>
              ))} */}
              <Home />  
              {/* <Gallery />   */}
              <Contact />
            </ScrollComponent>
          </Provider>
        </SessionProvider>
      </div>    
    </main>
  );
}
