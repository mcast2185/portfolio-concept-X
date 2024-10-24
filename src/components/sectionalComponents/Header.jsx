'use client';

import gsap from 'gsap';
import {
  signIn, 
  signOut, 
  useSession,
  getSession, 
} from 'next-auth/react';
import Link from 'next/link';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import { useRouter } from 'next/navigation';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Menu from './Menu';

import LOGO from "../../../public/images/logo/TJLogo.png";


const Header = () => {
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  // useGSAP(() => {
  //   gsap.to("")
  // })

  const router = useRouter();
  const {data: session, status} = useSession();



  return (
    <header className='header-container w-screen absolute top-0 z-[20]'>
      <div id="navbar-id" className='navbar fixed flex items-center h-[12.5vh] w-full flex-row gap-2 flex-grow py-2 sm:my-auto'>
        <div className='relative h-[11vh] pl-6 w-[45%] flex items-center flex-row justify-start flex-grow sm:flex-grow-0'>
          {/* <Image
            onClick={() => router.push('/')}
            src={LOGO}
            width={120}
            height={40}
            objectFit='contain'
            className='cursor-pointer h-[85%] w-[6vw] sm:w-[12vw]'
          /> */}
        </div>
        <div className='text-[#292929] flex items-center space-x-6 mr-6 whitespace-nowrap justify-end w-[60%]'>

          <div className='flex flex-row justify-start items-center w-full sm:hidden sm:h-0 sm:w-0'>
            <Link href="/" aria-details='' className='font-Inter font-[200] tracking-wider text-[16px] text-[#fff] mix-blend-difference'>
              <p className='px-7'>Home</p>
            </Link>
            <Link href="/" aria-details='' className='font-Inter font-[200] tracking-wider text-[16px] text-[#fff] mix-blend-difference '>
              <p className='px-7'>About</p>
            </Link>
            <Link href="/" aria-details='' className='font-Inter font-[200] tracking-wider text-[16px] text-[#fff] mix-blend-difference '>
              <p className='px-7'>Gallery</p>
            </Link>
            <Link href="/" aria-details='' className='font-Inter font-[200] tracking-wider text-[16px] text-[#fff] mix-blend-difference '>
              <p className='px-7'>Contact Us</p>
            </Link>
          </div>

          <div className='flex justify-end items-center flex-row w-56 sm:hidden sm:h-0 sm:w-0'>
{/*           
            <div 
              onClick={status === "unauthenticated" ? signIn : signOut} 
              className='link font-Inter font-[300] tracking-wider text-[14px] text-[#fff] mix-blend-difference px-3'>
              <p>
                {status === "authenticated" ? `Hello, ${session.user.name}`: "Sign in"}
              </p>
              <p className='font-medium md:text-sm'>Account & List</p>
            </div>
            <div 
              onClick={() => session && router.push('/orders')} 
              className='cursor-pointer link px-3 font-Inter font-[300] tracking-wider text-[14px] text-[#fff] mix-blend-difference'>
              <p>Items</p>
              <p className='font-medium md:text-sm'>& Orders</p>
            </div> */}
            {/* <Menu/> */}
          </div>

          <div className='sm:flex sm:justify-end sm:items-center sm:flex-row sm:w-56 w-0 h-0 sm:h-full '>
            {/* <Menu/> */}
          </div>
        </div>
      </div> 
    </header>
  );
};

export default Header;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  return {
    props: {
      session
    }
  };
};