import Image from 'next/image'
import React from 'react'
import User from '../../public/linkedindp.jpg'
import zolaha from '../../public/zolahalogo.png'
const Project = () => {
  return (

    <>
    
    
         
            <div
              className="mx-auto w-full p-5 lg:p-10 bg-white dark:bg-gray-800 shadow rounded"
            >
              <div
                className="flex flex-col lg:flex-row items-start lg:items-center mb-8"
              >
                <h1
                  tabindex="0"
                  className="focus:outline-none mr-12 text-xl lg:text-2xl text-gray-800 dark:text-gray-100 font-bold lg:w-1/2"
                >
                Digital Agency Website                </h1>
                <div
                  className="flex xl:gap-0 lg:gap-4 md:gap-4 flex-col md:flex-row items-start md:items-center"
                >
                  <div
                    tabindex="0"
                    className="focus:outline-none mt-4 lg:mt-0 mr-0 xl:mr-8 text-sm bg-indigo-100 text-indigo-700 dark:text-indigo-600 rounded font-medium py-2 w-48 flex justify-center"
                  >
                    Start Date: 02 Feb, 2023
                  </div>
                  <div
                    tabindex="0"
                    className="focus:outline-none mt-4 lg:mt-0 mr-0 lg:mr-4 xl:mr-8 text-sm bg-red-100 text-red-700 rounded font-medium py-2 w-48 flex justify-center"
                  >
                    End Date: 20 Feb, 2023
                  </div>
                </div>
              </div>
              <div
                className="flex flex-col lg:flex-row items-start lg:items-center"
              >
                <div className="w-full lg:w-1/2 pr-0 lg:pr-48">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded">
                      <Image
                        className="w-full h-full  object-contain rounded bg-slate-500  object-center"
                        src={zolaha}
                  alt="logo"
                  width={1000}
                  height={1000}
                      />
                    </div>
                    <div className="ml-2">
                      <a
                        tabindex="0"
                        className="cursor-pointer hover:text-gray-500 focus:text-gray-500 text-gray-800 dark:text-gray-100 focus:outline-none focus:underline"
                        ><h5 className="font-medium text-base">
ZOLAHA.COM                        </h5></a
                      >
                      <p
                        tabindex="0"
                        className="focus:outline-none text-gray-600 dark:text-gray-400 text-xs font-normal"
                      >
Ballia, Uttar Pradesh                      </p>
                    </div>
                  </div>
                  <p
                    tabindex="0"
                    className="focus:outline-none mt-5 text-sm text-gray-600 dark:text-gray-400 font-normal"
                  >
                  "I built a React-based digital agency website, hosted on a MySQL database, to showcase my work, skills, and achievements."
                  </p>
                </div>
                <div
                  className="lg:pl-8 w-full lg:w-1/2 flex flex-col lg:flex-row items-start lg:items-center"
                >
                  <div
                    className="mr-12 flex lg:block items-center lg:mr-6 xl:mr-12 mt-5 lg:mt-0"
                  >
                    <h2
                      tabindex="0"
                      className="focus:outline-none text-gray-600 dark:text-gray-400 font-bold text-xl lg:text-2xl leading-6 mb-1 lg:text-center"
                    >
                      7
                    </h2>
                    <a
                      className="text-gray-800 dark:text-gray-100 focus:outline-none"
                      tabindex="0"
                    >
                      <p className="ml-2 lg:ml-0 text-xl leading-5 text-center">
                        Milestones
                      </p></a
                    >
                  </div>
                  <div
                    className="mr-12 flex lg:block lg:mr-6 xl:mr-12 mt-5 lg:mt-0"
                  >
                    <h2
                      tabindex="0"
                      className="focus:outline-none text-gray-600 dark:text-gray-400 font-bold text-xl lg:text-2xl leading-6 mb-1 lg:text-center"
                    >
                      2
                    </h2>
                    <a
                      className="text-gray-800 dark:text-gray-100 focus:outline-none"
                      tabindex="0 "
                    >
                      <p className="ml-2 lg:ml-0 text-xl leading-5 text-center">
                        Teams Assigned
                      </p></a
                    >
                  </div>
                  <div className="mt-5 flex lg:block lg:mt-0">
                    <h2
                      tabindex="0"
                      className="focus:outline-none text-gray-600 dark:text-gray-400 font-bold text-xl lg:text-2xl leading-6 mb-1 lg:text-center"
                    >
                      3
                    </h2>
                    <a
                      className="text-gray-800 dark:text-gray-100 focus:outline-none"
                      tabindex="0 "
                    >
                      <p className="ml-2 lg:ml-0 text-xl leading-5 text-center">
                        Tasks Pending
                      </p></a
                    >
                  </div>
                </div>
              </div>
              <div className="relative">
                <hr className="mt-8 mb-8 lg:mb-10 h-1 rounded bg-gray-200" />
                <hr className="absolute top-0 h-1 w-2/3 rounded bg-indigo-400" />
              </div>
              <div
                className="flex flex-col lg:flex-row items-start lg:items-center"
              >
                <div
                  className="flex flex-col lg:flex-row w-full lg:w-2/3 items-start lg:items-center mb-8 lg:mb-0"
                >
                  <div
                    className="mr-24 flex lg:block flex-row-reverse items-center mb-4 lg:mb-0"
                  >
                    <h3
                      tabindex="0"
                      className="focus:outline-none text-indigo-700 dark:text-indigo-600 leading-6 text-lg"
                    >
                      Earnings
                    </h3>
                    <h2
                      tabindex="0"
                      className="focus:outline-none mr-2 lg:mr-0 text-gray-600 dark:text-gray-400 text-xl lg:text-2xl font-bold"
                    >
                    ₹35k
                    </h2>
                  </div>
                  <div
                    className="mr-24 flex lg:block flex-row-reverse items-center mb-4 lg:mb-0"
                  >
                    <h3
                      tabindex="0"
                      className="focus:outline-none text-indigo-700 dark:text-indigo-600 leading-6 text-lg"
                    >
                      Expenses
                    </h3>
                    <h2
                      tabindex="0"
                      className="focus:outline-none mr-2 lg:mr-0 text-gray-600 dark:text-gray-400 text-xl lg:text-2xl font-bold"
                    >
                    ₹10k
                    </h2>
                  </div>
                  <div className="flex lg:block flex-row-reverse items-center">
                    <h3
                      tabindex="0"
                      className="focus:outline-none text-indigo-700 dark:text-indigo-600 leading-6 text-lg"
                    >
                      Net Cashflow
                    </h3>
                    <h2
                      tabindex="0"
                      className="focus:outline-none mr-2 lg:mr-0 text-gray-600 dark:text-gray-400 text-xl lg:text-2xl font-bold"
                    >
                    ₹25k                    </h2>
                  </div>
                </div>
                <div
                  className="flex items-center w-full lg:w-1/3 justify-start lg:justify-end"
                >
                  <div
                    className="border-2 border-white dark:border-gray-700 shadow rounded-full w-10 h-10"
                  >
                    <Image
                      tabindex="0"
                      className="focus:outline-none w-full h-full overflow-hidden object-cover rounded-full"
                      src={User}
                      alt="Founder"
                    />
                  </div>
                  
                 
                </div>
              </div>
            </div>
          
    
    </>
  )
}

export default Project