"use client";

import React, { useEffect, useState } from 'react';

import Header from '../../components/sectionalComponents/Header';
import NavButtons from '../../components/animationComponents/NavButtons';
import PageTracker from '../../components/animationComponents/PageTracker';
import ScrollComponent from '../../components/animationComponents/ScrollComponent';
import Home from '@/pages/home';
import Transition from '@/pages/transition';
import { SessionProvider, SessionProviderProps } from 'next-auth/react';
import { Provider } from 'react-redux';
import { store } from '../store';
import About from '@/pages/about';
import Gallery from '@/pages/gallery';
import Contact from '@/pages/contact';


export default function Index({session}: SessionProviderProps) {
  const SECTIONS = ['Home', 'Gallery', 'About', 'Contact'];
  const pageComponents = [ <Home/>,  <Gallery/>,  <About/>,  <Contact/>]
  // const pageComponents = {'Home': <Home/>, 'Gallery': <Gallery/>, 'About': <About/>, 'Contact': <Contact/>}
  const [isLoaded, setIsLoaded] = useState(false);

  // const pageIndexFunction = () => {
  //   SECTIONS.map((section: string, index: number) => {
  //     section === 'Home' ? ()=> {
  //     return <div key={index} id={`section-${index}`} className='section'>
  //       <Home /> 
  //     </div> }
  //     : section === 'Gallery' ? ()=> {
  //       console.log()
  //     return <div key={index} id={`section-${index}`} className='section'>
  //       <Gallery />
  //     </div> }
  //     : section === 'About' ? ()=> {
  //       console.log()
  //     return <div key={index} id={`section-${index}`} className='section'>
  //       <About />
  //     </div> }
  //     : section === 'Contact' ? ()=> {
  //       console.log()
  //     return <div key={index} id={`section-${index}`} className='section'>
  //       <Contact />
  //     </div> }
  //     : console.log("User/Page: Conditional statement failed!");
  //   })
  // };

  useEffect(() => {
    setIsLoaded(false);
  })

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='App'>
        <SessionProvider session={session}>

          <Provider store={store}>
          {/* <Transition/> */}
            <Header />
            <ScrollComponent>
              <PageTracker sections={SECTIONS} />
              <NavButtons sections={SECTIONS} />
              {pageComponents.map((page, index) => (
                <div
                  key={index}
                  id={`section-${index}`}
                  className="section min-h-screen flex items-center justify-center">
                    
                  {page}
                </div>
              ))}

            </ScrollComponent>
          </Provider>
        </SessionProvider>
      </div>    
    </main>
  );
}
