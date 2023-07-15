import React from 'react'
import Timeline from '../../../components/Timeline/timeline'
import ZOLAHA from '../../../public/zolaha.jpg'
import SPEECH from '../../../public/speechtxt.png'
import CONVERTER from '../../../public/converter.png'
const Projects = () => {
  return (
    <>
    <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto flex items-center md:flex-row flex-col">
      <div className="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
        <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">Learning is Experience</h2>
        <h1 className="md:text-3xl text-2xl font-medium title-font text-gray-900">Projects</h1>
      </div>
          <div className="flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4">
          <a href="https://github.com/rishiratanmishra" target='_blank' rel="noopener noreferrer">

        <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          <span className="ml-4 flex items-start flex-col leading-none">
            <span className="text-xs text-gray-600 mb-1">My Projects on</span>
            <span className="title-font font-medium">Github</span>
          </span>
              </button></a>
              <a href="https://www.linkedin.com/in/rishi-ratan-mishra-3a89a5201" target='_blank' rel="noopener noreferrer">

        <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          <span className="ml-4 flex items-start flex-col leading-none">
            <span className="text-xs text-gray-600 mb-1">Connect me on</span>
            <span className="title-font font-medium">LinkedIn</span>
          </span>
              </button>
              </a>
      </div>
    </div>
      </section>
      <div class="grid gap-x-6 lg:grid-cols-3 lg:gap-x-12 px-20">
      <Timeline
        thumbnail={ZOLAHA}
        heading={"Digital Agency Website"}
          paragraph={"I have developed a digital agency website using React libraries and hosted it on a MySQL database. The website serves as my digital presence and showcases my work, skills, and achievements."}
        btnText={"Take a Tour"}
      />
      <Timeline
        thumbnail={SPEECH}
        heading={"Speech to Text Converter"}
          paragraph={ "I have developed a Speech-to-Text Converter project that allows users to effortlessly convert spoken words into written text. With a simple click of the record button, the application captures the audio input and generates the corresponding text output. Users can easily copy the generated text and utilize it for their needs, completely free of charge."}
        btnText={"Take a Tour"}
        />
      <Timeline
        thumbnail={CONVERTER}
        heading={"Converter"}
          paragraph={"This project is a small web development project that aims to teach students of AIML Club about building a converter website. The website provides users with three different conversion tools: Celsius to Fahrenheit converter, marks to percentage converter, and meter to kilometer converter."}
        btnText={"Take a Tour"}
        />
        </div>
    </>
  )
}

export default Projects