"use client";

import React from 'react';
import { Provider } from 'react-redux';
import { SessionProvider, SessionProviderProps } from 'next-auth/react';

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



export default function Index({session}: SessionProviderProps) {
  const SECTIONS = ['Home', 'Gallery', 'About', 'Contact'];
  const pageComponents = [ <Home/>,  <Gallery/>,  <About/>,  <Contact/>]


  return (
    <main className="overflow-x-hidden">
      <div className='App'>
        <SessionProvider session={session}>

          <Provider store={store}>
               
            <Transition/>
            <Header />
            <ScrollComponent>
              {pageComponents.map((page, index) => (
                <div
                key={index}
                id={`section-${index}`}
                className="section min-h-screen flex items-center justify-center">
                  {/* <NavButtons sections={SECTIONS}/> */}
                  <PageTracker sections={SECTIONS}/>
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
