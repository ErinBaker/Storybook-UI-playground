import React from 'react'

import "./CallToAction.css"

const Button = () => {

  return (      
      <div className="sm:container sm:mx-3.5 md:mx-auto px-20 sm:bg-red-400 md:bg-gray-50 lg:bg-red-50">
      <div className="flex flex-col items-center justify-items-center px-10">
        <h1 className={'text-3xl font-black font-sans xs:text-default sm:text-black md:text-yellow-500 lg:leading-6'}>
          React with TailwindCss and Storybook!
        </h1>
        <a
          className="underline text-3xl text-blue-400 hover:text-blue-200 mt-4 mb-4"
          href="https://github.com/TheMagoo73/react-tailwind-storybook-example"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get the code!
        </a>
      </div>
    </div>
  )
}

export default Button;