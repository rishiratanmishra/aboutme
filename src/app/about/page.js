import React from 'react';
import Hero from '../../../components/Hero/hero';
import Image from 'next/image';
import Rishi2 from '../../../public/rishiratan2.jpg';
import MicPic from '../../../public/rishi3rd.jpg';
import Google from '../../../public/rishigoogle.jpg';
import Mask from '../../../public/mask.jpg';
import Green from '../../../public/rishigreen.jpg';

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <Hero
        image={Rishi2}
        sectionClassname={"container mx-auto flex px-5 py-24 md:flex-row-reverse flex-col items-center"}
        height={500}
        width={400}
        borderRadius={20}
        text1={"About Me"}
        text3={"My name is Rishi Ratan Mishra . I am Web Developer and SEO expert currently in my 4th year of B.Tech studies at Haldia Institute of Technology. Along with my studies, I run a successful digital marketing agency. With a strong passion for web development and expertise in search engine optimization, I consistently deliver exceptional results for my clients."}
        text4={"My Hobbies : Writing, Watching Movies & Cooking "}
        btn1={"My Writings"}
        btn1Link={"https://rishiratan.blogspot.com"}
        btn2Link={'/#skills'}
        btn2={"Skills"}
      />

      {/* Timeline Section */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Timeline</h1>
          <div className="h-1 w-20 bg-indigo-500 rounded"></div>

          <div className="flex flex-wrap -mx-4 my-2">
            <div className="py-8 px-4 lg:w-1/3">
              <div className="h-full flex items-start">
                <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                  <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">2000</span>
                  <span className="font-medium text-lg text-gray-800 title-font leading-none">06</span>
                  <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">May</span>
                </div>
                <div className="flex-grow pl-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">Birth</h2>
                  <h1 className="title-font text-xl font-medium text-gray-900 mb-3">Welcome Home</h1>
                  <p className="leading-relaxed mb-5">
                    I was born on May 6, 2000, in Thamhanpura, Ballia, Uttar Pradesh.
                  </p>
                </div>
              </div>
            </div>

            <div className="py-8 px-4 lg:w-1/3">
              <div className="h-full flex items-start">
                <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                  <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">2006</span>
                  <span className="font-medium text-lg text-gray-800 title-font leading-none">July</span>
                </div>
                <div className="flex-grow pl-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">School</h2>
                  <h1 className="title-font text-xl font-medium text-gray-900 mb-3">R.K. Mission School</h1>
                  <p className="leading-relaxed mb-5">
                    I studied here at a school located in Sagarpali, Ballia, Uttar Pradesh from 1st to 8th grade.
                  </p>
                </div>
              </div>
            </div>

            <div className="py-8 px-4 lg:w-1/3">
              <div className="h-full flex items-start">
                <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                  <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">2014</span>
                  <span className="font-medium text-lg text-gray-800 title-font leading-none">March</span>
                </div>
                <div className="flex-grow pl-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">School</h2>
                  <h1 className="title-font text-xl font-medium text-gray-900 mb-3">Heritage International School</h1>
                  <p className="leading-relaxed mb-5">
                    During my 9th and 10th grades, I studied at a school located in Kanpur, Uttar Pradesh.
                  </p>
                </div>
              </div>
            </div>

            {/* Add more timeline items here with similar structure */}
          </div>
        </div>
      </section>

      {/* College Section */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">College</h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <div className="lg:w-1/2 w-full">
            <a href="https://hithaldia.ac.in/" target='_blank' rel="noopener noreferrer">

              <p className="sm:text-3xl text-2xl font-medium title-font mb-2 text-blue-700 text-right">
                Haldia Institute of Technology
              </p></a>
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <Image
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={Mask}
                  alt="content"
                  width={700}
                  height={300}
                />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">1st Year</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Lockdown-1</h2>
                <p className="leading-relaxed text-base text-justify">
                During my admission in 2020, when the lockdown was in effect and exams and studies shifted online, I made a conscious decision to prioritize self-development over traditional academics. It was during this time that my interest in entrepreneurship began to blossom, as I found myself increasingly drawn to the world of business and innovation.
              </p></div>
            </div>

            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <Image
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={Google}
                  alt="content"
                  width={1000}
                  height={720}
                />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">2nd Year</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4"> Lockdown-2</h2>
                <p className="leading-relaxed text-base text-justify">In my second year, I delved into web development and started a digital agency. I gained experience working with clients, delivering successful outcomes. I learned to apply learning in real-world scenarios, helping clients build thriving digital presence. Additionally, I explored various tech stacks and honed my problem-solving skills along the way.</p>
              </div>
            </div>

            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <Image
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={MicPic}
                  alt="content"
                  width={1000}
                  height={720}
                />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">3rd Year</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Haldia Campus</h2>
                <p className="leading-relaxed text-base text-justify">
                In my third year, I joined the AIML club as Vice president and taught front-end development to juniors for over a month. I organized many events like  networking events and business pitching program. I also interned with the Ministry of Cooperation, where I gained experience in project management and public relations.
                </p>
              </div>
            </div>

            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <Image
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={Green}
                  alt="content"
                  width={1000}
                  height={600}
                />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">4th Year</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Haldia Campus</h2>
                <p className="leading-relaxed text-base text-justify">
                I am currently in my fourth year of college, and it is time for my hard work to pay off. I am excited and a little bit scared, but I am hopeful for the future. I am happy with what I have accomplished, but I know that I have more to learn. I am excited to see what the future holds, and I am confident that I will be successful.                
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
