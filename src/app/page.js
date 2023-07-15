import Hero from '/components/Hero/hero'
import Rishi from '/public/rishiratan.jpg'
import Skills from '/components/Skills/skills'
import Project from '/components/Projects/project'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Hero
        image={Rishi}
        sectionClassname={"container mx-auto flex px-5 py-24 md:flex-row flex-col items-center"}
        width={720}
        height={600}
        text1={"I'm"}
        text2={'React Developer'}
        text3={"Freelance web developer and SEO specialist who can help you achieve your online goals."}
        text4={'I have skills in React, Node.js, JavaScript, and WordPress.'}
        btn1={"Hire Me"}
        btn1Link={'https://wa.link/7y9umn'}
      />

      <Skills  />

      <section className="text-gray-600 body-font">
      <div className="container px-5 py-14 mx-auto">
          <div className="flex flex-col text-center w-full mb-2">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
          Projects          </h1>
            <Link href={"/projects"} target='_blank' rel="noopener noreferrer">
              <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
                View More          </h2>
            </Link> 
          
        </div>
        </div>
        


    </section>
    <Project/>

    </>
  )
}
