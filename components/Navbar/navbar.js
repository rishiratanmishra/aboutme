import Link from 'next/link';
import React from 'react';
import Logo from '/public/linkedindp.jpg'
import Image from 'next/image';
const Navbar = () => {
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a href='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          
          <Image src={Logo} width={30} height={20} alt='logo' className='border-r' style={{ borderRadius: '50%' }} />
          <span className="ml-3 text-xl">Rishi Ratan Mishra</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href={'/'} className="mr-5 hover:text-gray-900">Home
            </Link>
            <Link href={'/about'} className="mr-5 hover:text-gray-900">About </Link>
            <Link href={'/projects'} className="mr-5 hover:text-gray-900">Projects </Link>
            <Link href={'https://docs.google.com/document/d/1r2HCH1IYSX30TNV7MAXLLVYyLdAXjzbYneSxIMe7vf8/edit?usp=sharing'} className="mr-5 hover:text-gray-900" target="_blank" rel="noopener noreferrer">Resume</Link>
          
          </nav>
          <a href='https://wa.link/7y9umn' target='_blank'>
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Contact
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
            </button>
            </a>
        </div>
      </header>
    </>
  );
};

export default Navbar;
