import React from 'react';
import SkillItem from './skillsItem';

const Skills = () => {
  return (
    <>
      <section id="skills" className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-2">
            <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
Developing            </h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
              My Skills
            </h1>
          </div>
        </div>
      </section>

      <div className="flex flex-wrap -m-4">
        <SkillItem
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><line x1="120" y1="176" x2="88" y2="176" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="104" y1="216" x2="104" y2="176" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="36" y1="176" x2="36" y2="216" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="64" y1="176" x2="64" y2="216" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="36" y1="196" x2="64" y2="196" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><polyline points="212 176 212 216 236 216" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><polyline points="144 216 144 176 164 204 184 176 184 216" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M48,136V40a8,8,0,0,1,8-8h96l56,56v48" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><polyline points="152 32 152 88 208 88" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></svg>
          }
          title="HTML"
          description="I am proficient in HTML and have experience building web pages using JavaScript and its various frameworks and libraries."        />

        <SkillItem
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M48,128V40a8,8,0,0,1,8-8h96l56,56v40" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><polyline points="152 32 152 88 208 88" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M80,210.5A21,21,0,0,1,66,216c-12.2,0-22-10.7-22-24s9.8-24,22-24a21,21,0,0,1,14,5.5" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M112,212a25.2,25.2,0,0,0,15,5c9,0,17-3,17-13,0-16-32-9-32-24,0-8,6-13,15-13a25.2,25.2,0,0,1,15,5" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M176,212a25.2,25.2,0,0,0,15,5c9,0,17-3,17-13,0-16-32-9-32-24,0-8,6-13,15-13a25.2,25.2,0,0,1,15,5" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></svg>
          }
          title="CSS"
          description="I have a strong understanding of CSS and can create stylish and responsive user interfaces. I am particularly skilled in using CSS frameworks like Bootstrap and Tailwind CSS."        />

        <SkillItem
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="512"
              height="512"
              viewBox="0 0 512 512"
            >
              <title>ionicons-v5_logos</title>
              <path d="M429.76,130.07,274.33,36.85a37,37,0,0,0-36.65,0L82.24,130.06A38.2,38.2,0,0,0,64,162.83V349a38.26,38.26,0,0,0,18.24,32.8L123,406.14l.23.13c20.58,10.53,28.46,10.53,37.59,10.53,32.14,0,52.11-20.8,52.11-54.29V182a8.51,8.51,0,0,0-8.42-8.58H182.13a8.51,8.51,0,0,0-8.42,8.58V362.51a15,15,0,0,1-6.85,13.07c-5.9,3.6-14.47,2.84-24.14-2.15l-39.06-23.51a1.1,1.1,0,0,1-.48-.92V165.46a1.32,1.32,0,0,1,.59-1.06l151.84-93a.82.82,0,0,1,.73,0l151.93,93a1.34,1.34,0,0,1,.55,1.1V349a1.28,1.28,0,0,1-.45,1L256.31,440.65a1.22,1.22,0,0,1-.8,0l-38.83-23.06a7.8,7.8,0,0,0-7.83-.41l-.34.2c-10.72,6.35-13.6,8-23.54,11.62-1.62.59-5.43,2-5.76,5.77s3.29,6.45,6.51,8.32l51.9,31.87a35.67,35.67,0,0,0,18.3,5.07l.58,0h0a35.87,35.87,0,0,0,17.83-5.07l155.43-93.13A38.37,38.37,0,0,0,448,349V162.83A38.21,38.21,0,0,0,429.76,130.07Z" />
              <path d="M307.88,318.05c-37.29,0-45.24-10.42-47.6-27.24a8.43,8.43,0,0,0-8.22-7.32h-19.8a8.44,8.44,0,0,0-8.26,8.58c0,14.58,5.12,62.17,83.92,62.17h0c24.38,0,44.66-5.7,58.63-16.49S388,311.26,388,292.55c0-37.55-24.5-47.83-72.75-54.55-49.05-6.82-49.05-10.29-49.05-17.89,0-5.47,0-18.28,35.46-18.28,25.23,0,38.74,3.19,43.06,20a8.35,8.35,0,0,0,8.06,6.67h19.87a8.24,8.24,0,0,0,6.16-2.86,8.91,8.91,0,0,0,2.12-6.44c-2.57-35.55-28.56-53.58-79.24-53.58-46.06,0-73.55,20.75-73.55,55.5,0,38.1,28.49,48.87,71.29,53.33,50,5.17,50,12.71,50,19.37C349.46,304.2,345.15,318.05,307.88,318.05Z" />
            </svg>
          }
          title="Javascript"
          description="I have extensive experience working with JavaScript and its various frameworks and libraries. I can build interactive web applications and implement complex functionalities using JavaScript."        />
          </div>
          

{/*Second Column*/}
          
          <div className="flex flex-wrap -m-4">
              
              
      <SkillItem
      icon={
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z" />
        </svg>
      }
      title="React Js"
      description=" I am proficient in building user interfaces using React and its ecosystem."
    />

              
     
      <SkillItem
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="512"
            height="512"
            viewBox="0 0 512 512"
          >
            <title>ionicons-v5_logos</title>
            <path d="M429.76,130.07,274.33,36.85a37,37,0,0,0-36.65,0L82.24,130.06A38.2,38.2,0,0,0,64,162.83V349a38.26,38.26,0,0,0,18.24,32.8L123,406.14l.23.13c20.58,10.53,28.46,10.53,37.59,10.53,32.14,0,52.11-20.8,52.11-54.29V182a8.51,8.51,0,0,0-8.42-8.58H182.13a8.51,8.51,0,0,0-8.42,8.58V362.51a15,15,0,0,1-6.85,13.07c-5.9,3.6-14.47,2.84-24.14-2.15l-39.06-23.51a1.1,1.1,0,0,1-.48-.92V165.46a1.32,1.32,0,0,1,.59-1.06l151.84-93a.82.82,0,0,1,.73,0l151.93,93a1.34,1.34,0,0,1,.55,1.1V349a1.28,1.28,0,0,1-.45,1L256.31,440.65a1.22,1.22,0,0,1-.8,0l-38.83-23.06a7.8,7.8,0,0,0-7.83-.41l-.34.2c-10.72,6.35-13.6,8-23.54,11.62-1.62.59-5.43,2-5.76,5.77s3.29,6.45,6.51,8.32l51.9,31.87a35.67,35.67,0,0,0,18.3,5.07l.58,0h0a35.87,35.87,0,0,0,17.83-5.07l155.43-93.13A38.37,38.37,0,0,0,448,349V162.83A38.21,38.21,0,0,0,429.76,130.07Z" />
            <path d="M307.88,318.05c-37.29,0-45.24-10.42-47.6-27.24a8.43,8.43,0,0,0-8.22-7.32h-19.8a8.44,8.44,0,0,0-8.26,8.58c0,14.58,5.12,62.17,83.92,62.17h0c24.38,0,44.66-5.7,58.63-16.49S388,311.26,388,292.55c0-37.55-24.5-47.83-72.75-54.55-49.05-6.82-49.05-10.29-49.05-17.89,0-5.47,0-18.28,35.46-18.28,25.23,0,38.74,3.19,43.06,20a8.35,8.35,0,0,0,8.06,6.67h19.87a8.24,8.24,0,0,0,6.16-2.86,8.91,8.91,0,0,0,2.12-6.44c-2.57-35.55-28.56-53.58-79.24-53.58-46.06,0-73.55,20.75-73.55,55.5,0,38.1,28.49,48.87,71.29,53.33,50,5.17,50,12.71,50,19.37C349.46,304.2,345.15,318.05,307.88,318.05Z" />
          </svg>
        }
        title="Node Js"
        description="I have experience working with Node.js and building server-side applications."
              />
              


              <SkillItem
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><ellipse cx="128" cy="80" rx="88" ry="48" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M40,80v48c0,26.5,39.4,48,88,48s88-21.5,88-48V80" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M40,128v48c0,26.5,39.4,48,88,48s88-21.5,88-48V128" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></svg>
              }
              title="Database"
          description="I have experience working with both MySQL and MongoDB databases. I can design database schemas, write efficient queries, and perform CRUD operations using JavaScript frameworks and libraries such as Sequelize (for MySQL) and Mongoose (for MongoDB)."            />
      
    </div>
    </>
  );
};

export default Skills;
