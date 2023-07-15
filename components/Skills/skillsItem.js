import React from 'react'

const SkillItem = ({ icon, title, description }) => {
    return (
      <>
    <div className="p-4 md:w-1/3">
      <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
        <div className="flex items-center mb-3">
          <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded bg-gray-300 text-white flex-shrink-0">
            {icon}
          </div>
          <h2 className="text-gray-900 text-lg title-font font-medium">{title}</h2>
        </div>
        <div className="flex-grow">
          <p className="leading-relaxed text-base text-gray-900">{description}</p>
          
        </div>
      </div>
          </div>
          </>
  
    )
}

export default SkillItem