import Image from "next/image";
import Logo from '../../public/linkedindp.jpg'

export const Footer = () => {
  return (
    <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <a
            href="/"
            aria-label="Go home"
            title="Company"
            className="inline-flex items-center"
          >
          <Image src={Logo} width={30} height={20} alt='logo' className='border-r' style={{ borderRadius: '50%' }} />
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
              Rishi Ratan Mishra{' '}
            </span>
          </a>
          <div className="mt-6 lg:max-w-sm">
            <p className="text-sm text-gray-800"> I use my skills to help businesses reach new heights and achieve their online goals.

            Web developer and SEO specialist with expertise in custom website development and search engine optimization.
            </p>
            <p className="mt-4 text-sm text-gray-800">
            Wanna get in touch or talk about a project?

            </p>
          </div>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-base font-bold tracking-wide text-gray-900">
            Contacts
          </p>
          <div className="flex">
            <p className="mr-1 text-gray-800">Phone:</p>
            <a
              href="tel:8840864525"
              aria-label="Hire me"
              title="Hire me"
              className="transition-colors  text-gray-800 duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              +91 8840864525
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-gray-800">Email:</p>
            <a
              href="mailto: rishiratanmishra2@gmail.com"
              aria-label="email"
              title="contact me on email"
              className="transition-colors  text-gray-800 duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              rishiratanmishra2@gmail.com{' '}
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-gray-800">Address:</p>
            <a
              href="https://shorturl.at/pJO27"
              target="_blank"
              rel="noopener noreferrer"
              aria-label=" address"
              title="my address"
              className="transition-colors  text-gray-800 duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Ballia, Uttar Pradesh, India
            </a>
          </div>
        </div>
        <div>
          <span className="text-base font-bold tracking-wide text-gray-900">
            Social
          </span>
          <p className="mt-4 text-sm text-gray-500">I'm live there</p>

          <div className="flex items-center mt-1 space-x-3">
            <a
              href="https://twitter.com/chasetheodds"
              className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
              target="_blank"
              rel="noopener noreferrer"

            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
              </svg>
            </a>
            <a
            href="https://instagram.com/rishiratanmishra"
              className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
              target="_blank"
              rel="noopener noreferrer"

            >
              <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                <circle cx="15" cy="15" r="4" />
                <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/rishiratanmishr"
              className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
              target="_blank"
              rel="noopener noreferrer"

            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/rishi-ratan-mishra-3a89a5201"
              className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
              target="_blank"
              rel="noopener noreferrer"

            >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>

            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        <p className="text-sm text-gray-600">
          © Copyright 2023- All rights reserved
        </p>
        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
       
          <li>
            <a href="https://zolaha.com/privacy-policy" target='_blank' rel="noopener noreferrer"
            className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              Privacy Policy
            </a>
          </li>
          <li>
          <a href="https://zolaha.com/terms" target='_blank' rel="noopener noreferrer"

              className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              Terms &amp; Conditions
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
