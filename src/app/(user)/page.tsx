"use client";

import { Provider } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { SessionProvider, SessionProviderProps } from 'next-auth/react';

import Home from '@/pages/home';
import { store } from '../store';
import About from '@/pages/about';
import Gallery from '@/pages/gallery';
import Contact from '@/pages/contact';
import Header from '../../components/sectionalComponents/Header';
import NavButtons from '../../components/animationComponents/NavButtons';
import PageTracker from '../../components/animationComponents/PageTracker';
import ScrollComponent from '../../components/animationComponents/ScrollComponent';



export default function Index({session}: SessionProviderProps) {
  const SECTIONS = ['Home', 'Gallery', 'About', 'Contact'];
  const pageComponents = [ <Home/>,  <Gallery/>,  <About/>,  <Contact/>]


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='App'>
        <SessionProvider session={session}>

          <Provider store={store}>
            <Header />
            <ScrollComponent>
              {/* 

              grab the element from the source page and adjust the code to 
              cohesively work with our components.

              <PageTracker sections={SECTIONS} />
              <NavButtons sections={SECTIONS} /> 
              */}
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
