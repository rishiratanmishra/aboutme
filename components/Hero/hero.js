import Image from 'next/image';
import React from 'react';

const Hero = ({sectionClassname, image, text1, text2, text3, text4, btn1, btn2, width, height, btn1Link, btn2Link, borderRadius }) => {
  return (
    <section className="text-gray-600 body-font">
      <div className={sectionClassname}>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <Image
            className="object-cover object-center rounded border-b-4 border-gray-500" style={{ borderRadius}}
            alt="hero"
            width={width}
            height={height}
            src={image}
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
            <span className="text-gray-500">{text1}</span>
            <span className="text-blue-500">.</span>
            <br  />
            {text2}
          </h1>
          <p className="mb-8 leading-relaxed ">
               {text3}<br/>
            {text4}
          </p>
          <div className="flex justify-center items-center">
            <a href={btn1Link} target="_blank" rel="noopener noreferrer">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                {btn1}
              </button>
            </a>
            <a href={btn2Link} target="_blank" rel="noopener noreferrer">
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                {btn2}
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
